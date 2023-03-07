import { getAllTags, getAllTitles } from "../api/services";

export async function load({cookies}) {
	
	const token = cookies.get('token');
	console.log("token from cookies blog layout: ",token);

	//const res = await getAllBlogsByUser(token);
	const tagsResult = await getAllTags();
	const titlesResult = await getAllTitles();
	
	return {
		tags: tagsResult.tags,
		titles: titlesResult,
		authToken: token
	};
}
