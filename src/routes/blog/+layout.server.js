import { getAllTags } from "../api/services";

export async function load() {
	const res = await getAllTags();
	console.log("res from blog layout server: ", res);
	return {
		tags: res.tags,
	};
}
