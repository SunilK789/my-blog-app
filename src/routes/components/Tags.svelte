<script>
	import { goto } from "$app/navigation";
	import { queryStringTags } from "../store";
	export let data = [];
	let tagArr = data.toString().split(",");

	console.log("tagArr: ", tagArr);
	const handleTagsClick = (tag) => {
		console.log("query: ", tag);
		queryStringTags.set(tag);
		goto(`/blog`);
	};
</script>

{#each tagArr as arr}
	{#if arr.length > 1}
		<button
			class="btn btn-secondary mx-2 btn-sm my-2"
			on:click={() => handleTagsClick(arr.trim())}
		>
			{arr.trim()}
		</button>
	{/if}
{/each}
