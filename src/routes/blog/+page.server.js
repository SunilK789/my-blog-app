import { getAllBlogs } from "../api/services";

export async function load({ cookies, page }) {
	const token = cookies.get('token');	
	const res = await getAllBlogs();

	return {
		blogs: res.blogs,
		token: token
	};
}
