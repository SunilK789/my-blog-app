<script>
	import { goto } from "$app/navigation";

	export let data;

	const handleBackButton = () => {
		goto("/blog");
	};
</script>

<div class="container">
	<div class="my-3">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<i class="fa-solid fa-circle-arrow-left" on:click={handleBackButton} />
	</div>
	<div class="card my-3">
		<div class="card-header"><strong>{data.blog.title}</strong></div>
		<div class="card-body">
			<p class="card-text">
				{data.blog.description}
			</p>
			<p>by {data.blog.author}</p>
		</div>
	</div>
</div>

<style>
	i {
		cursor: pointer;
		width: 100px;
	}
</style>
