<script>
	import { goto } from "$app/navigation";
	import {
		queryStringTags,
		filteredItemsArray,
		filteredItemsList,
	} from "../store";
	export let data = [];
	let updatedTags = data;

	const handleTagsClick = (tag) => {
		updatedTags = "";
		
		if (!($filteredItemsArray.some((t) => t.tag === tag))) {
			$filteredItemsArray = [
				...$filteredItemsArray,
				{
					tag,
				},
			];
		}
		
		goto(`/blog`);
		queryStringTags.set(tag);
	};

	let tagArr = updatedTags.toString().split(",");
</script>

{#each tagArr as arr}
	<button
		class="btn btn-secondary mx-2 btn-sm my-2"
		on:click={async () => await handleTagsClick(arr.trim())}
	>
		{arr.trim()}
	</button>
{/each}
