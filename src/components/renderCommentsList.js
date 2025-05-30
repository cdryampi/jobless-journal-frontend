export const renderCommentsList = (comments) => {
  const container = document.getElementById('comments-list');
  container.innerHTML = '';

  if (!comments.length) {
    container.innerHTML = `<p class="text-zinc-500 italic">Nadie ha dicho nada... el silencio también es un juicio.</p>`;
    return;
  }

  comments.forEach(comment => {
    const el = document.createElement('div');
    el.className = 'mb-4 p-3 border-l-4 border-zinc-700 bg-zinc-900 text-sm text-zinc-300 rounded shadow-inner';

    el.innerHTML = `
      <div class="prose prose-sm prose-invert">
        ${comment.content}
      </div>
      <p class="text-xs text-zinc-500 mt-2">${new Date(comment.created_at).toLocaleString()}</p>
    `;

    container.appendChild(el);
  });
};
