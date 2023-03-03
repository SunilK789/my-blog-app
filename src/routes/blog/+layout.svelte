<script>
	import { authToken, LoggedInUser } from "../store";
	import Tags from "../components/Tags.svelte";
	import { browser } from "$app/environment";

	if (browser) {
		const token = window.localStorage.getItem("token");
		authToken.set(token);
	}

	export let data = [];
	console.log("res from blog layout server: ",data);
	// Array to keep track of duplicates
	var { dups } = filterArrayElements(data.tags);
	var arrStr = dups.join(",");

	var newArr = arrStr.split(",");
	var { arr2 } = filterArrayElements2(newArr);
	var filteredTags = arr2;

	function filterArrayElements(arrItems) {
		var dups = [];
		var arr = arrItems.filter(function (el) {
			// If it is not a duplicate, return true
			if (dups.indexOf(el.tag) == -1) {
				dups.push(el.tag);
				return true;
			}

			return false;
		});
		return { dups, arr };
	}
	function filterArrayElements2(arrItems) {
		var dups2 = [];
		var arr2 = arrItems.filter(function (el) {
			var item = el.toString().trim();
			// If it is not a duplicate, return true
			if (dups2.indexOf(item) == -1) {
				dups2.push(item);
				return true;
			}

			return false;
		});
		return { dups2, arr2 };
	}
</script>

<div class="container">
	<div class="row">
		<div class="col-8">
			<slot />
		</div>
		<div class="col-4">
			<div class="border-blue my-4">
				{#if $LoggedInUser}
					<a class="btn btn-primary mb-4" href="/blog/addblog">Add Blog</a>
				{/if}
				<h1>About</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque atque
					quis adipisci distinctio qui voluptatibus ad illum labore ab! Mollitia
					autem enim ea laboriosam perspiciatis facere aperiam? Error,
					voluptates obcaecati.
				</p>
			</div>
			<div class="col-12">
				<div class="row d-flex">
					<h3 class="my-4">Tags:</h3>
					<div>
						{#each Object.values(filteredTags) as tags}
							<Tags {tags} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
