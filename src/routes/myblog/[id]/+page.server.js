import { getAllBlogById } from "../../api/services";

export async function load({ params }) {
	const res = await getAllBlogById(params.id);
	return {
		blog: res,
	};
}
