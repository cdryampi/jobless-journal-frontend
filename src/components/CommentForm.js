import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export let editor = null;

export const renderCommentForm = () => {
  const container = document.getElementById('comment-section');

  container.innerHTML = `
    <h3 class="text-lg text-zinc-100 font-bold mb-2">Envia un mensaje</h3>
    <div class="mb-4">
      <textarea id="comment-editor" class="w-full"></textarea>
    </div>
    <button id="submit-comment" class="bg-zinc-800 text-sm px-4 py-2 rounded text-zinc-100 border border-zinc-600 hover:bg-zinc-700">
      Enviar comentario inútil
    </button>
  `;

    ClassicEditor
    .create(document.querySelector('#comment-editor'), {
        toolbar: ['bold', 'italic', 'link', 'blockquote', 'undo', 'redo']
    })
    .then(ed => {
        editor = ed;
    })
    .catch(err => {
        console.error('Error al cargar CKEditor:', err);
    });

};
