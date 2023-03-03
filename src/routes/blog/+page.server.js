import { getAllBlogs } from "../api/services";
import { authToken } from "../store";
import { get } from "svelte/store";
import { page } from "$app/stores";
import { browser } from "$app/environment";

export async function load({ page }) {
	if (browser) {
		const url = new URL(window.location.toString());
		//const url = page.url;

		console.log(url);
	}
	const token = get(authToken);
	const res = await getAllBlogs();

	return {
		blogs: res.blogs,
	};
}
