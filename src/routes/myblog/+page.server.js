import { getAllBlogsByUser } from "../api/services";

export async function load({cookies}) {
	const token = cookies.get('token');
	return {
		//blogs: res.blogs,
		token: token
	};
}
