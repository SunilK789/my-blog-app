<script>
	import { currentAlertType, alertVisible, alertMessage } from "$lib/stores/alertStore";
   
	$: type = $currentAlertType;
	$: show = $alertVisible;
</script>

{#if show}
	<div class="container pt-4">
		<div
			class="alert alert-{type} alert-dismissible fade show text-center my-5"
			role="alert"
		>
			<strong><h3>{$alertMessage}</h3></strong>
			<!-- <button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			/> -->
		</div>
	</div>
{/if}
