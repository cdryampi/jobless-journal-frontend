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

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error('Error al cargar los posts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export const fetchPostBySlug = async (slug) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${slug}`);
    if (!response.ok) {
      throw new Error('Error al cargar el post');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}