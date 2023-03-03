<script>
	import { blogId, currentBlogId } from "../store";

	export let data;
</script>

<div class="list-group">
	{#each Object.values(data.titles) as title}
		<a
			href="/blog/{title._id}"
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
