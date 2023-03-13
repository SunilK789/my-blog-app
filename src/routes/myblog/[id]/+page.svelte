<script>
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { deleteBlogById } from "../../api/services";
	import { blogId, storedBlogs, storedBlogsList } from "../../store";

	blogId.set($page.params.id);

	export let data;
	$: blogs = $storedBlogsList;
	const handleBackButton = () => {
		blogId.set(null);
		goto("/myblog");
	};

	const handleDeleteBlog = async (id) => {
		const res = await deleteBlogById(id, data.token);
		console.log("blogs before delete: ", blogs);
		const blogsAfterDelete = blogs.filter((blog) => blog._id !== id);

		console.log("blogsAfterDelete: ", blogsAfterDelete);

		storedBlogs.set(blogsAfterDelete);
		goto(`/myblog`);
	};
	const handleEditBlog = async (id) => {
		goto(`/myblog/edit/${id}`);
	};
</script>

<div class="container">
	<div class="pt-5">
		<div class="my-5">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="card-header d-flex">
				<div class="flex-grow-1">
					<i
						class="fa-solid fa-circle-arrow-left"
						role="button"
						on:click={handleBackButton}
					/>
				</div>
				<div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<i
						class="fa-solid fa-pen-to-square mx-4"
						role="button"
						on:click={handleEditBlog(data.blog._id)}
					/>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<i
						class="fa-solid fa-trash"
						role="button"
						on:click={handleDeleteBlog(data.blog._id)}
					/>
				</div>
			</div>
		</div>
		<div class="text-center fs-1"><strong>{data.blog.title}</strong></div>
		<div class="card my-3">
			<div class="card-body">
				<p class="card-text">
					{data.blog.description}
				</p>
				<p>
					<small>by {data.blog.author}</small>
					<i class="fa-solid fa-clock-rotate-left mx-2" />
				</p>
			</div>
		</div>
	</div>
</div>
<style>	
	:global(body.dark-mode) div :global(.card) {
		background-color: #3a3d40;
		color: #bfc2c7;
	}
</style>