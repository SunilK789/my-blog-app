<script>
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { blogId } from "../../store";

	blogId.set($page.params.id);

	export let data;

	const handleBackButton = () => {
		blogId.set(null);
		goto("/blog");
	};
</script>
<div class="pt-5">
	<div class="my-5">
<div class="container">
	<div class="my-3">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<i role="button" class="fa-solid fa-circle-arrow-left" on:click={handleBackButton} />
	</div>
	<div class="text-center fs-1"><strong>{data.blog.title}</strong></div>
	<div class="card my-3">
		<div class="card-body">
			<p class="card-text">
				{data.blog.description}
			</p>
			<p>
				<small>by {data.blog.author}</small>
				<i class="fa-solid fa-clock-rotate-left mx-2" />
			</p>
		</div>
	</div>
</div></div>
</div>


<style>	
	:global(body.dark-mode) div :global(.card) {
		background-color: #3a3d40;
		color: #bfc2c7;
	}
</style>