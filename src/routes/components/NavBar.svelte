<script>
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { authToken, LoggedInUser } from "../store";

	var token = "";
	if (browser) {
		token = window.localStorage.getItem("token");
		authToken.set(token);
	}

	const handleLogout = () => {
		if (browser) {
			window.localStorage.clear();
			token = window.localStorage.getItem("token");
			authToken.set(token);
		}

		goto("/login");
	};
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Blogs 4 you</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/about">About</a>
				</li>
				<li class="nav-item">
					<a data-sveltekit-preload-data="off" class="nav-link" href="/blog">Blog</a>
				</li>
			</ul>
			<form class="d-flex">
				<input
					class="form-control me-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
				<button class="btn btn-outline-success" type="submit">Search</button>
			</form>
			{#if !$LoggedInUser}
				<a class="btn btn-primary mx-2" href="/login">Login</a>
				<a class="btn btn-primary" href="/signup">Sign Up</a>
			{:else}
				<button class="btn btn-primary mx-2" on:click={handleLogout}>
					Logout
				</button>
			{/if}
		</div>
	</div>
</nav>
