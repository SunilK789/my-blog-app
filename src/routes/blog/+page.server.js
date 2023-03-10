import { getAllBlogs } from "../api/services";
import { authToken } from "../store";
import { get } from "svelte/store";
import { page } from "$app/stores";
import { browser } from "$app/environment";

export async function load({ cookies, page }) {
	const token = cookies.get('token');	
	const res = await getAllBlogs();

	return {
		blogs: res.blogs,
		token: token
	};
}
