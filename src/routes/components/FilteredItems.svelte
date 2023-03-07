<script>
	import {  filteredItemsArray } from "../store";

	const handleClearButton = () => {
		filteredItemsArray.set([]);
	};
	
	const handleRemoveTag =(tag)=>{
			let removedArr = $filteredItemsArray.filter((x) => x.tag !== tag);
			filteredItemsArray.set(removedArr);
	};

	$: filterArray = $filteredItemsArray;
</script>

<div class="card my-4">
	<div class="card-header">
		{#each filterArray as arr}
			<button class="btn btn-outline-primary mx-2 btn-sm my-2">
				{arr.tag}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<i class="fa-solid fa-rectangle-xmark p-1" on:click={handleRemoveTag(arr.tag)}></i>
			</button>
		{/each}

		<button class="btn btn-outline-info mx-2 btn-sm my-2" on:click={handleClearButton}>
			Clear
		</button>
	</div>
</div>
