import { getAllBlogsByUser } from "../../api/services";

export async function load({cookies}) {

	const token = cookies.get('token');

	// console.log("token from cookies: ",token);
	// const res = await getAllBlogsByUser(token);

    //console.log("res for myblogs: ",res);
	return {
		token: token,
	};
}
