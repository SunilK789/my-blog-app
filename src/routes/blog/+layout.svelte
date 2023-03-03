<script>
	import { authToken, LoggedInUser } from "../store";
	import Tags from "../components/Tags.svelte";
	import { browser } from "$app/environment";
	import BlogsList from "../components/BlogsList.svelte";

	if (browser) {
		const token = window.localStorage.getItem("token");
		authToken.set(token);
	}

	export let data = [];
	var dups = [];
	console.log("res from blog layout page: ", data.tags);
	// Array to keep track of duplicates
	filterArrayElements(data.tags);
	console.log("dups after filterArrayElements: ", dups);

	var arrStr = dups.join(",");
	console.log("arrStr: ", arrStr);

	var newArr = arrStr.split(",");
	var { arr2 } = filterArrayElements2(newArr);
	var filteredTags = arr2;

	console.log("filteredTags: ", filteredTags);
	async function filterArrayElements(arrItems) {
		console.log("tags inside filterArrayElements: ", arrItems);
		
		var arr = arrItems.filter(function (el) {
			// If it is not a duplicate, return true
			if (dups.indexOf(el.tag) == -1) {
				dups.push(el.tag);
				return true;
			}

			return false;
		});
		console.log("dups inside filterArrayElements: ", dups);
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
				<h1>Blogs:</h1>
				<BlogsList data={data.titles} />
			</div>
			<div class="col-12">
				<div class="row d-flex">
					<h3 class="my-4">Tags:</h3>
					<div>
						{#each Object.values(filteredTags) as tags}
							<Tags data={tags} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
