<script>
	import { blogId, currentBlogId } from "../store";
import { fade, fly } from "svelte/transition";
	export let data;
	export let myblog;

	const link = myblog ? "/myblog/": "/blog/";
</script>

<div class="list-group">
	{#each Object.values(data) as title}
		<a
			href="{link}{title._id}"
			class="list-group-item list-group-item-action  {$currentBlogId ===
			title._id
				? 'active'
				: ''}"
			on:click={() => blogId.set(title._id)}
			id={title._id}
		>
			{title.title}
		</a>
	{/each}
</div>
<style>	
	:global(body.dark-mode) div :global(.list-group-item) {
		background-color: #3a3d40;
		color: #bfc2c7;
	}
	:global(body.dark-mode) div :global(.list-group-item):hover {
		color: rgb(112, 196, 34);	
	}
</style>