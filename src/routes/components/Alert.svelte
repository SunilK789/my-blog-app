<script>
	import { currentAlertType, alertVisible, alertMessage } from "$lib/stores/alertStore";
    import { fade, fly  } from 'svelte/transition';

	$: type = $currentAlertType;
	$: show = $alertVisible;
</script>

{#if show}
<!-- position-absolute top-0 start-100 translate-middle -->
<div class="position-absolute top-0 end-0 my-alert">
	<div class="alert " transition:fly="{{ y: -100, duration: 1000 }}" >
		<div
			class="alert alert-{type} alert-dismissible fade show text-center my-5"
			role="alert"
		>
			<strong><h3>{$alertMessage}</h3></strong>
		</div>
	</div></div>
{/if}

<style>
    .my-alert{
        z-index: 10;
         /* grid-area: 1 / 1; */
         /* position: absolute; */
        
        
    }
</style>
