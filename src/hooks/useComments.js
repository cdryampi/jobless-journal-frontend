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

export const fetchCommentsBySlug = async (slug) => {
  try {
    const res = await fetch(`${BASE_URL}/comments/${slug}`);
    if (!res.ok) {
      throw new Error('No se pudieron cargar los comentarios.');
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error al recuperar comentarios:', err);
    return [];
  }
};
