<script>
	import { browser } from "$app/environment";
	import {
		authToken,
		blogId,
		queryStringTags,
		filteredItemsArray,
	} from "../store";
	import Tags from "../components/Tags.svelte";
	import FilteredItems from "../components/FilteredItems.svelte";

	export let data;
	let blogs = data.blogs;
	let allBlogs = data.blogs;
	let currentTag = "";
	let filteredData = [];
	let filteredDataByTag = [];

	if (browser) {
		const token = window.localStorage.getItem("token");
		authToken.set(token);
	}
	blogId.set(null);

	queryStringTags.subscribe((value) => {
		currentTag = value;
		blogs = [];
		if (currentTag !== null) {
			var PATTERN = currentTag;
			filteredData = data.blogs.filter(function (item) {
				return item.tag.includes(PATTERN);
			});

			blogs = filteredData;
		} else {
			blogs = allBlogs;
		}
	});

	$: blogItems = blogs;
</script>

{#if $filteredItemsArray.length > 0}
	<FilteredItems />
{/if}

{#each Object.values(blogItems) as blog, i}
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
			<p><small>by {blog.author}</small></p>
			<a href="/blog/{blog._id}" class="btn btn-primary">read more...</a>

			<Tags data={blog.tag} />
		</div>
	</div>
{/each}
