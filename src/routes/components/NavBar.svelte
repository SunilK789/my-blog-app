<script>
	import { goto } from "$app/navigation";
	import { authToken, LoggedInUser } from "../store";
	import { mode, currentMode } from "$lib/stores/modeStore";

	let isLoggedInUser = false;

	const handleModes = () => {
		
		if ($currentMode === "undefined") {
			mode.set("dark");
			console.log("current mode: ",$currentMode)
		} else if ($currentMode === "dark"){
			mode.set("light");
			console.log("current mode: ",$currentMode)
		}else{
			mode.set("dark");
			console.log("current mode: ",$currentMode)
		}

		window.document.body.classList.toggle('dark-mode');
		

	};
	const handleBlogLinkClick = () => {
		goto("/blog");
	};

	authToken.subscribe((value) => {
		if (value) {
			isLoggedInUser = true;
		} else {
			isLoggedInUser = false;
		}
	});

	$: loggedInUser = isLoggedInUser;
	$: setMode = $currentMode === "dark"? "Light": "Dark";
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-{$currentMode} fixed-top">
	<div class="container-fluid">
		<a class="navbar-brand" href="/blog">Blogs 4 you</a>
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
				<!-- <li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/">Home</a>
				</li> -->
				<li class="nav-item">
					<a class="nav-link" href="/about">About</a>
				</li>
				<li class="nav-item">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a class="nav-link" href="#" on:click={handleBlogLinkClick}>Blog</a>
				</li>
				{#if loggedInUser}
					<li class="nav-item">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a class="nav-link" href="/myblog">My Blogs</a>
					</li>
				{/if}
			</ul>
			<form class="d-flex">
				<input
					class="form-control me-2 btn-sm"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
				<button class="btn btn-outline-success" type="submit">Search</button>
			</form>
			{#if !loggedInUser}
				<a class="btn btn-primary btn-sm mx-2" href="/login">Login</a>
				<a class="btn btn-primary btn-sm" href="/signup">Sign Up</a>
			{:else}
				<a class="btn btn-primary mx-2" href="/logout">Logout</a>
			{/if}
			<div class="form-check form-switch mx-2">
				<input
					class="form-check-input"
					type="checkbox"
					role="switch"
					id="flexSwitchCheckDefault"
					
					on:click={handleModes}
				/>
				<label class="form-check-label" for="flexSwitchCheckDefault">
					Enable {setMode} Mode
				</label>
			</div>
		</div>
	</div>
</nav>
<style>	
	:global(body.dark-mode) button {
		background-color: #0084f6;
		color: white;
	}
	:global(body.dark-mode) a {		
		color: white;
	}
	
	:global(body.dark-mode) ul li a {		
		color: white;
	}
	
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
	:global(body) {
		background-color: #e9ecef;
	}
</style>