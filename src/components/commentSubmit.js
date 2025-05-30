import Swal from 'sweetalert2';
import { editor } from './CommentForm.js';
const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001/api';

export const initCommentSubmit = () => {
  const btn = document.getElementById('submit-comment');

  btn?.addEventListener('click', async () => {
    const content = editor?.getData().trim();
    if (!content) {
      return Swal.fire('Comentario vacío', 'Al menos intenta decir algo miserable.', 'warning');
    }

    const slug = new URLSearchParams(location.search).get('slug');

    const res = await fetch(`${BASE_URL}/comments/${slug}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        "content": content,
        "slug": slug || 'sin-slug' // Manejo de slug vacío
       })
    });

    if (res.ok) {
      Swal.fire('Registrado', 'Tu miseria ha sido archivada.', 'success');
      editor.setData('');
    } else {
      Swal.fire('Error', 'Ni siquiera tu comentario pudo ser procesado.', 'error');
    }
  });
};
