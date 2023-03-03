import { getAllTags, getAllTitles } from "../api/services";

export async function load() {
	const tagsResult = await getAllTags();
	const titlesResult = await getAllTitles();
	console.log("res from blog layout server: ", tagsResult);
	return {
		tags: tagsResult.tags,
		titles: titlesResult,
	};
}
