import { getAllTags, getAllTitles } from "../api/services";

export async function load() {
	const tagsResult = await getAllTags();
	const titlesResult = await getAllTitles();
	
	return {
		tags: tagsResult.tags,
		titles: titlesResult,
	};
}
