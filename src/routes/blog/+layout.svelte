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
	// Array to keep track of duplicates
	filterArrayElements(data.tags);
	var arrStr = dups.join(",");
	var newArr = arrStr.split(",");
	
	var filteredTags = removeDuplicates(newArr);
	function removeDuplicates(arr) {
        return [...new Set(arr)];
    }

	function filterArrayElements(arrItems) {
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
				<h3>Blogs:</h3>
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
