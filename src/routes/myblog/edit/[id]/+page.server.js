import { getAllBlogById } from "../../../api/services";

export async function load({cookies, params}) {

	const token = cookies.get('token');
	const res = await getAllBlogById(params.id);	
		
	return {
		token: token,
		blog: res
	};
}
