import { getAllBlogs } from "../api/services";
import { authToken } from "../store";
import { get } from "svelte/store";

export async function load() {
	const token = get(authToken);
	const res = await getAllBlogs();

	return {
		blogs: res,
	};
}
