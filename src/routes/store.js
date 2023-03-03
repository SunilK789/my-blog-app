import { writable, derived } from "svelte/store";

export const authToken = writable();
export const LoggedInUser = derived(authToken, ($authToken) => $authToken);

export const blogId = writable();
export const currentBlogId = derived(blogId, ($blogId) => $blogId);

export const queryStringTags = writable();
