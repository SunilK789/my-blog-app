import { writable, derived } from "svelte/store";

export const authToken = writable();
export const LoggedInUser = derived(authToken, ($authToken) => $authToken);
