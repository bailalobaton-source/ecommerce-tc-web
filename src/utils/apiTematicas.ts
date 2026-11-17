// src/utils/apiTematicas.ts

import { API_URL } from '../../api';

export interface Tematica {
  id: number;
  nombre_tematica: string;
  img_tematica: string;
  color_tematica: string;
  mostrar_carrusel: boolean;
}

// Variable global que actuará como nuestro "Storage" o Caché en el servidor
let tematicasCache: Tematica[] | null = null;

export async function getTematicasGlobales(): Promise<Tematica[]> {
  // 1. Si los datos ya están en caché, los devolvemos instantáneamente
  if (tematicasCache) {
    console.log('⚡ Devolviendo temáticas desde la caché');
    return tematicasCache;
  }

  // 2. Si es la primera vez, hacemos la petición al backend
  console.log('🌐 Haciendo fetch al backend...');
  try {
    const response = await fetch(`${API_URL}/tematicas`);

    if (!response.ok) throw new Error('Error en la petición');

    const result = await response.json();

    // Guardamos el resultado en la variable caché
    tematicasCache = result.data || result.tematicas || [];

    return tematicasCache || [];
  } catch (error) {
    console.error('Error obteniendo temáticas:', error);
    return [];
  }
}
