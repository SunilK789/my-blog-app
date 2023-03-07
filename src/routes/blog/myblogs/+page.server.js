import { getAllBlogsByUser } from "../../api/services";

import { get } from "svelte/store";
import { authToken, LoggedInUser } from "../../store";
import { browser } from "$app/environment";

export async function load({cookies}) {

	const token = cookies.get('token');

	console.log("token from cookies: ",token);
	const res = await getAllBlogsByUser(token);
	return {
		blogs: res.blogs,
	};
}
