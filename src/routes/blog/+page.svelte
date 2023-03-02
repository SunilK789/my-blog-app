<script>
	import { browser } from "$app/environment";
	import { authToken, LoggedInUser } from "../store";
	import Tags from "../components/Tags.svelte";

	export let data;

	if (browser) {
		const token = window.localStorage.getItem("token");
		authToken.set(token);
	}
</script>

{#each Object.values(data.blogs) as blog, i}
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

			<Tags tags={blog.tag} />
		</div>
	</div>
{/each}
