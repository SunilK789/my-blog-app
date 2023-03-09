import { writable, derived, } from "svelte/store";

export const authToken = writable();
export const LoggedInUser = derived(authToken, ($authToken) => $authToken);

export const blogId = writable();
export const currentBlogId = derived(blogId, ($blogId) => $blogId);


export const filteredItemsArray = writable([]);
export const filteredItemsList = derived(filteredItemsArray, ($filteredItemsArray) => $filteredItemsArray);

export const storedBlogs = writable([]);
export const storedBlogsList = derived(storedBlogs, ($storedBlogs) => $storedBlogs);


