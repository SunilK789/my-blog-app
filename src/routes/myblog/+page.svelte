<script>
	import { browser } from "$app/environment";
	import {
		authToken,
		blogId,		
		filteredItemsArray,
	} from "../store";
	import Tags from "../components/Tags.svelte";
	import FilteredItems from "../components/FilteredItems.svelte";

	export let data=[];
	let blogs = data.blogs;
    console.log("data for my blogs: ",blogs);
	let allBlogs = data.blogs;
	let filteredData = [];
	let filteredDataByTag = [];

	if (browser) {
		const token = window.localStorage.getItem("token");
		authToken.set(token);
	}
	blogId.set(null);

	filteredItemsArray.subscribe((value) => {
		filteredData = [];
		if ($filteredItemsArray.length === 0) {
			blogs = allBlogs;
			
		} else if ($filteredItemsArray.length > 0) {
			
			$filteredItemsArray.forEach((element) => {
				var PATTERN = element.tag;
				filteredDataByTag = data.blogs.filter(function (item) {
					return item.tag.includes(PATTERN);
				});

				filteredDataByTag.forEach((element) => {
					if (!filteredData.some((t) => t === element)) {
						filteredData.push(element);
					}
				});

			});

			blogs = filteredData;
		}
	});

	$: blogItems2 = blogs;
</script>

{#if $filteredItemsArray.length > 0}
	<FilteredItems />
{/if}

{#each Object.values(blogItems2) as blog, i}
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
			<a href="/myblog/{blog._id}" class="btn btn-outline-primary btn-sm">read more...</a>
			
			<Tags tags={blog.tag} />
		</div>
	</div>
{/each}
