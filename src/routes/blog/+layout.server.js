import { getAllTags } from "../api/services";

export async function load() {
	const res = await getAllTags();
	return {
		tags: res.tags,
	};
}
