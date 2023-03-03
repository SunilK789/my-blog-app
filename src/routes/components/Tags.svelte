<script>
	export let data = [];
	let tagArr = data.toString().split(",");
</script>

<!-- svelte-ignore a11y-missing-attribute -->

{#each tagArr as arr}
	{#if arr.length > 1}
		<a hre="/" class="btn btn-secondary mx-2 btn-sm my-2">{arr}</a>
	{/if}
{/each}
