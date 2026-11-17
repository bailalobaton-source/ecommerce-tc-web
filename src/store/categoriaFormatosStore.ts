import { atom } from 'nanostores';
import type { Categoria, Formato } from '../utils/apiCategoriaFormatos';

// Crea un estado global que cualquier componente de React, Vue o Svelte puede leer
export const categoriasStore = atom<Categoria[]>([]);

export const formatosStore = atom<Formato[]>([]);
