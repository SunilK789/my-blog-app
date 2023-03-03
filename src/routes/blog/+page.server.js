import { getAllBlogs } from "../api/services";
import { authToken } from "../store";
import { get } from "svelte/store";

export async function load() {
	const token = get(authToken);
	const res = await getAllBlogs();
	console.log("res from page server: ",res);
	return {
		blogs: res.blogs
	};
}
