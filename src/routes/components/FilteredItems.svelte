<script>
	import { goto } from "$app/navigation";
	import { queryStringTags, filteredItemsArray, filteredItemsList } from "../store";
	//export let data = [];
	//console.log("filteredItemsList FROM filteredItems.svelte: ",filteredItemsList)
	// let updatedTags = $filteredItemsArray;	
	// $: filteredArray = removeDuplicates(updatedTags);	

	//let tagArr = updatedTags.toString().split(",");
	//let tagArr = updatedTags;
	//console.log("filteredItemsArray form filterdtags: ",$filteredItemsArray)
	//console.log("tags 123: ",tagArr);

	const handleClearButton = () => {
		$filteredItemsArray=[];
	};

	function removeDuplicates(arr) {
        return [...new Set(arr)];
    } 

	$: filterArray = $filteredItemsArray;
</script>

<div class="card my-4">
	<div class="card-header">
		{#each filterArray as arr}
			<!-- {#if arr.length > 0} -->
			<button class="btn btn-secondary mx-2 btn-sm my-2">
				{arr.tag}
			</button>
			<!-- {/if} -->
		{/each}

		<button class="btn btn-info mx-2 btn-sm my-2" on:click={handleClearButton}>
			Clear
		</button>
	</div>
</div>
