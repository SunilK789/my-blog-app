import { getAllTags, getAllTitles } from "../api/services";

export async function load({cookies}) {
	
	const token = cookies.get('token');
	const tagsResult = await getAllTags();
	const titlesResult = await getAllTitles();
	
	return {
		tags: tagsResult.tags,
		titles: titlesResult.titles,
		authToken: token
	};
}
