// Configuración dinámica de la URL base
const getBaseURL = () => {
  // En desarrollo, usar el proxy de Vite o la URL completa
  if (import.meta.env.DEV) {
    return '/api'; // Vite proxy maneja esto
  }
  
  // En producción, usar rutas relativas (mismo dominio)
  return '/api';
};

const BASE_URL = getBaseURL();

export const comentarConIA = async (textoDelPost, slug) => {
  // Enviar el texto del post al backend para que la IA lo comente y humille de su crueldad existencial.
  if (!textoDelPost || typeof textoDelPost !== 'string') {
    console.error('Texto del post inválido para comentar.');
    return;
  }
  console.log('Enviando texto del post para comentar:', textoDelPost);
  const res = await fetch(`${BASE_URL}/gpt/comentar`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: textoDelPost, slug: slug || 'ia-comment' })
  });

  const data = await res.json();
  console.log('Comentario cruel:', data.comentario);
  return data.comentario;
};
