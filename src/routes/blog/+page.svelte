<script>
	import { browser } from "$app/environment";
	import { authToken, blogId, queryStringTags } from "../store";
	import Tags from "../components/Tags.svelte";
	
	export let data;
	let blogs = data.blogs;
	let allBlogs = data.blogs;
	let currentTag = "";
	if (browser) {
		const token = window.localStorage.getItem("token");
		authToken.set(token);
	}
	blogId.set(null);

	queryStringTags.subscribe((value) => {
		currentTag = value;
		if (currentTag !== null) {
			var PATTERN = currentTag;
			const filteredData = data.blogs.filter(function (item) {
				return item.tag.includes(PATTERN);
			});

			blogs = [...filteredData];
			console.log("filterd blogs: ", blogs);
		} else {
			blogs = allBlogs;
			console.log("if tag === null, blogs: ", blogs);
		}
	});
</script>

{#each Object.values(blogs) as blog, i}
	<div class="card my-4">
		<div class="card-header"><strong>{blog.title}</strong></div>
		<div class="card-body">
			<p class="card-text">
				{#if blog.description.length > 200}
					{[blog.description.slice(0, 200)]}...
				{:else}
					{blog.description}
				{/if}
			</p>
			<p>by {blog.author}</p>
			<a href="/blog/{blog._id}" class="btn btn-primary">read more...</a>

			<Tags data={blog.tag} />
		</div>
	</div>
{/each}
