import { renderPostCard } from './renderPostCard.js';

export const renderPosts = (posts) => {
  const container = document.getElementById('posts-list');
  container.innerHTML = '';

  if (!posts.length) {
    container.innerHTML = `<p class="text-zinc-500 italic">No hay entradas... como tampoco hay esperanza.</p>`;
    return;
  }

  posts.forEach(post => {
    const card = renderPostCard(post, { mode: 'preview' });
    container.appendChild(card);
  });
};
