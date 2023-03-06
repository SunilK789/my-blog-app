<script>
	import { goto } from "$app/navigation";
	import { queryStringTags, filteredItemsArray, filteredItemsList } from "../store";

	const handleClearButton = () => {
		filteredItemsArray.set([]);
	};
	
	const handleRemoveTag =(tag)=>{
			let removedArr = $filteredItemsArray.filter((x) => x.tag !== tag);
			//console.log(removedArr);
			filteredItemsArray.set(removedArr);
			//console.log("$filteredItemsArray after removed: ",$filteredItemsArray);
	};

	$: filterArray = $filteredItemsArray;
</script>

<div class="card my-4">
	<div class="card-header">
		{#each filterArray as arr}
			<!-- {#if arr.length > 0} -->
			<button class="btn btn-outline-primary mx-2 btn-sm my-2">
				{arr.tag}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<i class="fa-solid fa-rectangle-xmark p-1" on:click={handleRemoveTag(arr.tag)}></i>
			</button>
			<!-- {/if} -->
		{/each}

		<button class="btn btn-info mx-2 btn-sm my-2" on:click={handleClearButton}>
			Clear
		</button>
	</div>
</div>
