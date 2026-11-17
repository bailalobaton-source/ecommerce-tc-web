import { atom } from 'nanostores';
import type { Tematica } from '../utils/apiTematicas';

// Crea un estado global que cualquier componente de React, Vue o Svelte puede leer
export const tematicasStore = atom<Tematica[]>([]);
