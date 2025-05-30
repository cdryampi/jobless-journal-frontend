import { fetchPosts } from './hooks/usePosts.js';
import { renderPosts } from './components/renderPosts.js';
import { gptButtons } from './utils/gptButtons.js';

const init = async () => {
  // Carga los posts y renderiza la lista
  const posts = await fetchPosts();
  renderPosts(posts);
  await gptButtons(); // activa los botones luego del render
};

document.addEventListener('DOMContentLoaded', init);
