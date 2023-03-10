import { redirect } from "@sveltejs/kit";
import { getAllTags, getAllBlogsByUser } from "../api/services";

export async function load({cookies}) {
	
	const token = cookies.get('token');
	if(token)
	{
		const res = await getAllBlogsByUser(token);
		const tagsResult = await getAllTags();
		let titles = [];

		if(res.success)
		{
			res.blogs.filter(function (el) {
				titles.push(el.title);
			});	
		
			return {
				tags: tagsResult.tags,
				titles: res.blogs,
				authToken: token,
				blogs: res.blogs
			};
		}
}
else{
	const token = cookies.get('token');
		throw redirect('301','/login');
}

}
