import { writable, derived, } from "svelte/store";

export const mode = writable();
export const currentMode = derived(mode, ($mode) => $mode);