<script>
	import { authToken } from "../store";

	export let data;
	let isLoggedInUser = true;
	console.log("data.token: ", data.token);
	console.log("data.token === ''", data.token === "");
	if (!data.token) {
		console.log("inside logout page token: ", data.token);
		isLoggedInUser = false;
		authToken.set(null);
	}
</script>

<div>
	{#if !isLoggedInUser}
		<div class="container text-center">
			<div class="row">
				<div class="mt-5">
					<div class="my-5">
						<div class="col-md-12">
							<div class="error-template">
								<h1>Logout Success!</h1>

								<div class="error-actions">
									<a href="/blog" class="btn btn-primary my-4">
										<span class="glyphicon glyphicon-home" />
										Take Me Home
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
