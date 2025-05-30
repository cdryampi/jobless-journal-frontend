export const renderPostCard = (post, options = { mode: 'preview' }) => {
  const card = document.createElement('div');
  const isFull = options.mode === 'full';

  card.className = `
    bg-zinc-800 border border-zinc-700 rounded-lg p-5 shadow-inner
    hover:shadow-zinc-600/10 transition-shadow space-y-2
  `;

  card.innerHTML = `
    <h1 class="text-2xl font-bold text-zinc-100">${post.title}</h1>
    <p class="text-zinc-500 text-sm italic">${new Date(post.date).toLocaleDateString()}</p>

    <div class="${isFull ? 'prose prose-invert' : 'text-zinc-400 text-sm italic'}">
      ${isFull ? post.content : (post.excerpt || post.content || 'Un pedazo más del derrumbe emocional.')}
    </div>

    ${!isFull ? `
      <div class="flex justify-between items-center gap-5">
        <a href="#" class="text-sm text-zinc-500 underline hover:text-zinc-300 transition-colors gpt-button"
           data-text="${post.title}\n${post.excerpt || post.content}">
          Comentar con crueldad existencial
        </a>
        <a href="/pages/post.html?slug=${post.slug}" class="text-sm text-zinc-500 underline hover:text-zinc-300 transition-colors">
          Leer más y sufrir →
        </a>
      </div>
    ` : `
      <button id="btn-comentar" class="bg-zinc-800 text-xs text-zinc-300 px-3 py-2 rounded hover:bg-zinc-700 border border-zinc-600">
        Comentar con crueldad IA
      </button>
      <div id="comentario-ia" class="mt-4 text-zinc-400 text-sm italic"></div>
    `}

    <p class="text-xs text-zinc-500">Autor: ${post.author || 'Un alma perdida en la oscuridad'}</p>
  `;

  return card;
};
