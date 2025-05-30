import { fetchPostBySlug } from '../hooks/usePosts.js';
import { comentarConIA } from '../hooks/useCommentAI.js';
import { renderPostCard } from '../components/renderPostCard.js';
import { renderCommentForm } from '../components/CommentForm.js';
import { initCommentSubmit } from '../components/commentSubmit.js';
import { fetchCommentsBySlug } from '../hooks/useComments.js';
import { renderCommentsList } from '../components/renderCommentsList.js';


const slug = new URLSearchParams(window.location.search).get('slug');

const loadPost = async () => {
  const container = document.getElementById('post-content');
  const comments = await fetchCommentsBySlug(slug);

  try {
    const post = await fetchPostBySlug(slug);
    const card = renderPostCard(post, { mode: 'full' });
    container.appendChild(card);
    // IA hook
    document.getElementById('btn-comentar')?.addEventListener('click', async () => {
      const texto = document.querySelector('.prose')?.innerText || '';
      const comentario = await comentarConIA(texto, slug);
      document.getElementById('comentario-ia').textContent = `"${comentario}"`;
      document.getElementById('btn-comentar').classList.add('hidden');
    });
  renderCommentForm();
  initCommentSubmit();
  renderCommentsList(comments);

  } catch (err) {
    container.innerHTML = `<p class="text-red-500">No se pudo cargar el post. El vacío también puede ser un contenido.</p>`;
  }

};

document.addEventListener('DOMContentLoaded', loadPost);
