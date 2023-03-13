<script>
	let email = "";
	let password = "";
</script>

<div class="pt-5">
	<div class="my-5">
		<div class="container">
			<div class="row d-flex justify-content-center align-items-center">
				<div class="col-12 col-md-8 col-lg-6 col-xl-5">
					<div
						class="card bg-dark text-white border border-secondary border-1 rounded p-5"
					>
						<form method="POST" action="?/login">
							<h1 class="text-center">Login</h1>
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">
									Email address
								</label>
								<input
									type="email"
									class="form-control"
									id="email"
									name="email"
									aria-describedby="emailHelp"
									required
									bind:value={email}
								/>
								<div id="emailHelp" class="form-text">
									We'll never share your email with anyone else.
								</div>
							</div>
							<div class="mb-3">
								<label for="exampleInputPassword1" class="form-label">
									Password
								</label>
								<input
									type="password"
									class="form-control"
									id="password"
									name="password"
									required
									bind:value={password}
								/>
							</div>
							<div class="text-center">
								<button
									type="submit"
									class="btn btn-primary mx-2"
									disabled={email.length < 5 || password.length < 5}
								>
									Login
								</button>
								<a href="/signup" class="btn btn-primary">Register</a>
							</div>
						</form>
					</div>
				</div>
				<!-- <div class="col-4" /> -->
			</div>
		</div>
	</div>
</div>
