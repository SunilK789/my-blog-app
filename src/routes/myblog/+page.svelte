<script>
	import { browser } from "$app/environment";
	import { authToken, blogId, filteredItemsArray } from "../store";
	import Tags from "../components/Tags.svelte";
	import FilteredItems from "../components/FilteredItems.svelte";
  import { deleteBlogByTag } from "../api/services";

	export let data = [];
	let blogs = data.blogs;
	console.log("data for my blogs: ", blogs);
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

	 const handleDeleteBlog = async (id) => {
		console.log("id to delete: ",id);
		const res = await deleteBlogByTag(id,data.token);
		console.log("after delete response : ",res);
		const blogsAfterDelete = blogs.filter((blog)=>blog._id !== id);
		console.log("blogsAfterDelete: ",blogsAfterDelete);
		blogs = blogsAfterDelete;
	};

	$: blogItems = blogs;
</script>

{#if $filteredItemsArray.length > 0}
	<FilteredItems />
{/if}

{#each Object.values(blogItems) as blog, i}
	<div class="card my-4">
		<div class="card-header d-flex">
			<div class="flex-grow-1">
				<strong>{blog.title}</strong>
			</div>
			<div class=""><i class="fa-solid fa-pen-to-square mx-4" role="button"></i>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<i class="fa-solid fa-trash" role="button" on:click={handleDeleteBlog(blog._id)} /></div>
		</div>
		<div class="card-body">
			<p class="card-text">
				{#if blog.description.length > 200}
					{[blog.description.slice(0, 200)]}...
				{:else}
					{blog.description}
				{/if}
			</p>
			<p><small>by {blog.author}</small></p>
			<a href="/myblog/{blog._id}" class="btn btn-outline-primary btn-sm">
				read more...
			</a>

			<Tags tags={blog.tag} />
		</div>
	</div>
{/each}


