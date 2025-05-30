import { comentarConIA } from '../hooks/useCommentAI';

export const gptButtons = async () => {
  const buttons = document.querySelectorAll('.gpt-button');
  // recuperamos el slug del post que es el hermano del botón y tenemos que hacer un split con el = para obtener el slug
  buttons.forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault();

      const textoDelPost = button.getAttribute('data-text');
      if (!textoDelPost) {
        console.error('No se encontró el texto del post para comentar.');
        return;
      }
      // recuperamos el slug del post que es el hermano del botón y tenemos que hacer un split con el = para obtener el slug
      const slug = button.parentElement.querySelector('a:nth-child(2)').getAttribute('href').split('=')[1];
      if (!slug) {
        console.error('No se encontró el slug del post para comentar.');
        return;
      }
      const comentario = await comentarConIA(textoDelPost, slug);
      if (comentario) {
        let comentarioElement = button.parentElement.querySelector('.gpt-comentario');

        if (!button.parentElement.querySelector('h3')) {
          const h3 = document.createElement('h3');
          h3.textContent = 'Comentario cruel de la IA:';
          h3.className = 'text-sm text-zinc-300 font-semibold mt-4';
          button.parentElement.parentElement.appendChild(h3);
        }

        if (!comentarioElement) {
          comentarioElement = document.createElement('p');
          comentarioElement.className = 'text-xs text-zinc-500 gpt-comentario';
          button.parentElement.parentElement.appendChild(comentarioElement);
        }

        comentarioElement.textContent = comentario;
        comentarioElement.classList.add('mt-2');
        button.classList.add('hidden');
      } else {
        alert('Error al generar el comentario.');
      }
    });
  });
};
