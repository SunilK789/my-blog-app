<script>
	import { browser } from "$app/environment";
	import {
		authToken,
		blogId,
		filteredItemsArray,
		storedBlogs,
		storedBlogsList,
	} from "../store";
	import Tags from "../components/Tags.svelte";
	import FilteredItems from "../components/FilteredItems.svelte";
	import { deleteBlogById } from "../api/services";
	import { goto } from "$app/navigation";

	export let data = [];
	let blogs = $storedBlogsList; //data.blogs;

	blogId.set(null);

	const handleDeleteBlog = async (id) => {
		const res = await deleteBlogById(id, data.token);
		if (res.success) {
			const blogsAfterDelete = blogs.filter((blog) => blog._id !== id);
			storedBlogs.set(blogsAfterDelete);
			blogs = $storedBlogsList;
		} else {
			alert(res.message);
		}
	};
	const handleEditBlog = async (id) => {
		goto(`/myblog/edit/${id}`);
	};

	$: blogItems = blogs;
</script>

{#if $filteredItemsArray.length > 0}
	<FilteredItems />
{/if}
<div class="pt-5">
	<div class="my-5">
		{#each Object.values(blogItems) as blog, i}
			<div class="card my-3">
				<div class="card-header d-flex">
					<div class="flex-grow-1">
						<strong>{blog.title}</strong>
					</div>

					<div>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<i
							class="fa-solid fa-pen-to-square mx-4"
							role="button"
							on:click={handleEditBlog(blog._id)}
						/>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<i
							class="fa-solid fa-trash"
							role="button"
							on:click={handleDeleteBlog(blog._id)}
						/>
					</div>
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

					<Tags myblog={true} tags={blog.tag} />
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