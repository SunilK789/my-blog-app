<script>
	
	import { blogId, filteredItemsArray } from "../store";
	import Tags from "../components/Tags.svelte";
	import FilteredItems from "../components/FilteredItems.svelte";
	import { mode, currentMode } from "$lib/stores/modeStore";

	export let data;
	let blogs = data.blogs;
	let allBlogs = data.blogs;
	let filteredData = [];
	let filteredDataByTag = [];
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

	$: blogItems = blogs;
</script>

<div class="pt-5">
	<div class="my-5">
		{#if $filteredItemsArray.length > 0}
			<FilteredItems />
		{/if}

		{#each Object.values(blogItems) as blog, i}
			<div class="card my-3">
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
					<a href="/blog/{blog._id}" class="btn btn-outline-primary btn-sm">
						read more...
					</a>

					<Tags tags={blog.tag} />
				</div>
			</div>
		{/each}
	</div>
</div>
<style>	
	:global(body.dark-mode) div :global(.card) {
		/* this will apply to all <strong> elements, in any
			 component, that are inside <div> elements belonging
			 to this component */
		background-color: #3a3d40;
		color: #bfc2c7;
	}
</style>