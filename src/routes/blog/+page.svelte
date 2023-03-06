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

	filteredItemsArray.subscribe((value) => {
		if ($filteredItemsArray.length === 0) {
			blogs = allBlogs;
			filteredData = [];
		} else {
			if ($filteredItemsArray.length > 0) {
				filteredData = [];
				$filteredItemsArray.forEach((element) => {
					var PATTERN = element.tag;
					//console.log("Pattern: ", PATTERN);
					filteredDataByTag = data.blogs.filter(function (item) {
						return item.tag.includes(PATTERN);
					});
					//console.log("filteredDataByTag: ", filteredDataByTag);
					//filteredData = [...filteredData, filteredDataByTag];

					filteredDataByTag.forEach((element) => {
						if (!filteredData.some((t) => t === element)) {
							filteredData.push(element);
						}
					});

					//console.log("filteredData final: ", filteredData);
				});

				blogs = filteredData;
			}
		}

		//console.log("$filteredItemsArray.subscribe", $filteredItemsArray);
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

			<Tags tags={blog.tag} />
		</div>
	</div>
{/each}
