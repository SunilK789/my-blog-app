import { getAllTags, getAllTitles,getAllBlogsByUser } from "../api/services";

export async function load({cookies}) {
	
	const token = cookies.get('token');
	console.log("token from cookies blog layout: ",token);

	const res = await getAllBlogsByUser(token);
	const tagsResult = await getAllTags();
	let titles = [];

	res.blogs.filter(function (el) {
		titles.push(el.title);
	});
	console.log("getTilles after filter: ",titles);
	
	return {
		tags: tagsResult.tags,
		titles: res.blogs,
		authToken: token,
		blogs: res.blogs
	};
}
