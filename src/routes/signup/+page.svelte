<script>
	import { userSignUp } from "../api/auth";
	import { authToken } from "../store";
	import { goto } from "$app/navigation";
	import { browser } from "$app/environment";

	let name = "";
	let username = "";
	let email = "";
	let password = "";
	const handleSignUp = async () => {
		var res = await userSignUp(name, email, username, password);
		if (res.success) {
			goto("/login");
		} else {
			alert(res.error);
		}
	};
</script>

<div class="container my-5">
	<div class="row d-flex justify-content-center align-items-center">
		<div class="col-12 col-md-8 col-lg-6 col-xl-5">
			<div
				class="card bg-dark text-white border border-secondary border-1 rounded p-5"
			>
				<form>
					<h1 class="text-center">Sign Up</h1>
					<div class="mb-3">
						<label for="name" class="form-label">Name</label>
						<input
							type="text"
							class="form-control"
							id="name"
							required
							bind:value={name}
						/>
					</div>
					<div class="mb-3">
						<label for="username" class="form-label">User name</label>
						<input
							type="text"
							class="form-control"
							id="username"
							required
							bind:value={username}
						/>
					</div>
					<div class="mb-3">
						<label for="email" class="form-label">Email address</label>
						<input
							type="email"
							class="form-control"
							id="email"
							aria-describedby="emailHelp"
							required
							bind:value={email}
						/>
						<div id="emailHelp" class="form-text">
							We'll never share your email with anyone else.
						</div>
					</div>
					<div class="mb-3">
						<label for="password" class="form-label">Password</label>
						<input
							type="password"
							class="form-control"
							id="password"
							required
							bind:value={password}
						/>
					</div>
					<div class="text-center">
						<button
							class="btn btn-primary"
							on:click={handleSignUp}
							disabled={name.length < 3 ||
								username.length < 3 ||
								email.length < 5 ||
								password.length < 5}
						>
							Sign Up
						</button>
						<a href="/login" class="btn btn-primary mx-2">Login</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
