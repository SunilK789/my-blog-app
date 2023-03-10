<script>
	import { goto } from "$app/navigation";
	import { authToken, LoggedInUser } from "../store";
	
	let isLoggedInUser = false;
	
	const handleBlogLinkClick = () => {
		goto("/blog");
	};

	authToken.subscribe((value) => {	
		//console.log("loggedinuser from subscribe navbar - value: ", value);	
		if (value) {
			isLoggedInUser = true;
			//console.log("loggedinuser from subscribe navbar isLoggedInUser: ", isLoggedInUser);
		} else {
			isLoggedInUser = false;
			//console.log("loggedinuser from subscribe navbar isLoggedInUser - else: ", isLoggedInUser);
		}
	});

	$: loggedInUser = isLoggedInUser;
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
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a class="nav-link" href="#" on:click={handleBlogLinkClick}>Blog</a>
				</li>
				<li class="nav-item">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a class="nav-link" href="/myblog">My Blogs</a>
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
			{#if !loggedInUser}
				<a class="btn btn-primary mx-2" href="/login">Login</a>
				<a class="btn btn-primary" href="/signup">Sign Up</a>
			{:else}
				<a class="btn btn-primary mx-2" href="/logout" >
					Logout
				</a>
			{/if}
		</div>
	</div>
</nav>
