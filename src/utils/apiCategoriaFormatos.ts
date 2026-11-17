// src/utils/apiTematicas.ts
import { API_URL } from '../../api';

export interface Categoria {
  id: number;
  nombre: string;
}

export interface Formato {
  id: number;
  nombre: string;
}

// Variable global que actuará como nuestro "Storage" o Caché en el servidor
let categoriasCache: Categoria[] | null = null;

export async function getCategorias(): Promise<Categoria[]> {
  // 1. Si los datos ya están en caché, los devolvemos instantáneamente
  if (categoriasCache) {
    console.log('⚡ Devolviendo categorías desde la caché');
    return categoriasCache;
  }

  // 2. Si es la primera vez, hacemos la petición al backend
  console.log('🌐 Haciendo fetch al backend...');
  try {
    const response = await fetch(`${API_URL}/ajustes/categorias`);

    if (!response.ok) throw new Error('Error en la petición');

    const result = await response.json();

    // Guardamos el resultado en la variable caché
    categoriasCache = result.data || result.categorias || [];

    return categoriasCache || [];
  } catch (error) {
    console.error('Error obteniendo categorías:', error);
    return [];
  }
}

let formatosCache: Formato[] | null = null;

export async function getFormatos(): Promise<Formato[]> {
  // 1. Si los datos ya están en caché, los devolvemos instantáneamente
  if (formatosCache) {
    console.log('⚡ Devolviendo formatos desde la caché');
    return formatosCache;
  }

  // 2. Si es la primera vez, hacemos la petición al backend
  console.log('🌐 Haciendo fetch al backend...');
  try {
    const response = await fetch(`${API_URL}/ajustes/formatos`);

    if (!response.ok) throw new Error('Error en la petición');

    const result = await response.json();

    // Guardamos el resultado en la variable caché
    formatosCache = result.data || result.formatos || [];

    return formatosCache || [];
  } catch (error) {
    console.error('Error obteniendo formatos:', error);
    return [];
  }
}
