<script>
	import { goto } from "$app/navigation";
	import {
		filteredItemsArray,
	} from "../store";
	export let tags =[];
	let updatedTags = tags;

	const handleTagsClick = (tag) => {
		updatedTags = "";
		tags=[];
		
		if (!($filteredItemsArray.some((t) => t.tag === tag))) {
			$filteredItemsArray = [
				...$filteredItemsArray,
				{
					tag,
				},
			];
		}
		
		goto(`/blog`);
	};

	let tagArr = updatedTags.toString().split(",");
	console.log("updated tags: ",updatedTags);
	updatedTags="";
</script>

{#each tagArr as arr}
	<button
		class="btn btn-secondary mx-2 btn-sm my-2"
		on:click={async () => handleTagsClick(arr.trim())}
	>
		{arr.trim()}
	</button>
{/each}
