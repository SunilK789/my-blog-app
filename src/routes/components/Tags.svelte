<script>
	import { onMount, afterUpdate, tick } from "svelte";

	import { goto } from "$app/navigation";
	import { filteredItemsArray } from "../store";
	export let tags = [];
	//let updatedTags = tags;
	let tagArr = [];
	onMount(async () => {
		//await tick();
		tagArr = tags.toString().split(",");
		//console.log("tagArr names:", tagArr);
	});
	const handleTagsClick = (tag) => {
		//updatedTags = "";
		tags = [];

		if (!$filteredItemsArray.some((t) => t.tag === tag)) {
			$filteredItemsArray = [
				...$filteredItemsArray,
				{
					tag,
				},
			];
		} else {
			let removedArr = $filteredItemsArray.filter((x) => x.tag !== tag);
			//console.log(removedArr);
			filteredItemsArray.set(removedArr);
		}

		goto(`/blog`);
	};

	$: newTags = tagArr;
	//console.log("tagArr: ", tagArr);
	//console.log("updated tags: ", updatedTags);
	//updatedTags = "";
</script>

{#each newTags as arr}
	<button
		class="btn btn-outline-secondary mx-2 btn-sm my-2 {$filteredItemsArray.some(
			(t) => t.tag === arr.trim()
		)
			? 'active'
			: ''}"
		on:click={async () => handleTagsClick(arr.trim())}
	>
		{arr.trim()}
	</button>
{/each}
