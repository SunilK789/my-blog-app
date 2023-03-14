<script>
	import { goto } from "$app/navigation";
	import { authToken, LoggedInUser } from "../store";
	import { mode, currentMode } from "$lib/stores/modeStore";
	import NProgress from "nprogress";
	import { navigating } from "$app/stores";
	// NProgress css
	import "nprogress/nprogress.css";
	import { Jumper, Circle3 } from "svelte-loading-spinners";
  import Alert from "./Alert.svelte";
  import { fade } from 'svelte/transition';
  
	let color = "#FF3E00";
	let size = "40";
	let unit = "px";

	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16,
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}

	let isLoggedInUser = false;

	const handleModes = () => {
		if ($currentMode === "undefined") {
			mode.set("dark");
			console.log("current mode: ", $currentMode);
		} else if ($currentMode === "dark") {
			mode.set("light");
			console.log("current mode: ", $currentMode);
		} else {
			mode.set("dark");
			console.log("current mode: ", $currentMode);
		}

		window.document.body.classList.toggle("dark-mode");
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
	$: setMode =  $currentMode === "dark" ? "Light" : "Dark";
</script>

<nav class="navbar navbar-expand-lg navbar-light fixed-top">
	<div class="container-fluid">
		<b><a class="navbar-brand" href="/blog">Blogs4you</a></b>
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
					<b><a class="nav-link" href="/about">About</a></b>
				</li>
				<li class="nav-item">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<b>
						<a class="nav-link" href="#" on:click={handleBlogLinkClick}>Blog</a>
					</b>
				</li>
				{#if loggedInUser}
					<li class="nav-item">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<b><a class="nav-link" href="/myblog">My Blogs</a></b>
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
				<button class="btn btn-outline-success btn-sm" type="submit">
					Search
				</button>
			</form>
			{#if !loggedInUser}
				<a class="btn btn-primary btn-sm mx-2" href="/login">Login</a>
				<a class="btn btn-primary btn-sm" href="/signup">Sign Up</a>
			{:else}
				<a class="btn btn-primary mx-2 btn-sm" href="/logout">Logout</a>
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
<Alert></Alert>
{#if $navigating}
	<div class="container my-5 mt-5 text-center">
		<div class="spinner-item" title="Circle3">
			<Circle3
				{size}
				{unit}
				ballTopLeft="#FF3E00"
				ballTopRight="#F8B334"
				ballBottomLeft="#40B3FF"
				ballBottomRight="#676778"
			/>
		</div>
	</div>
{/if}

<style>
	:global(body) {
		background-color: #e9ecef;
	}
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
	:global(body.dark-mode) button {
		background-color: #0084f6;
		color: white;
	}
	:global(body.dark-mode) a {
		color: white;
	}
	:global(body.dark-mode) a:hover {
		color: rgb(112, 196, 34);
	}
	:global(body.dark-mode) ul li a {
		color: white;
	}
	:global(body.dark-mode) ul li a:hover {
		color: rgb(112, 196, 34);
	}
	:global(body) nav {
		background-color: hsl(210, 69%, 85%);
		color: #000308;
	}
	:global(body) nav:hover {
		color: rgb(112, 196, 34);
	}
	:global(body.dark-mode) nav {
		background-color: #3a3d40;
		color: #bfc2c7;
	}
	.spinner-item {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
</style>
