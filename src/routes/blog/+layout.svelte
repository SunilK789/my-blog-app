<script>
	import { authToken, LoggedInUser } from "../store";
	import Tags from "../components/Tags.svelte";
	import { browser } from "$app/environment";
	import BlogsList from "../components/BlogsList.svelte";
	
	export let data = [];
	const loggedInUser = data.authToken;
	authToken.set(data.authToken);
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
			<div class="pt-5">
			<div class="border-blue my-4">
				<!-- {#if loggedInUser}
					<a class="btn btn-primary mb-4" href="/blog/addblog">Add Blog</a>
				{/if} -->
				<h3>Blogs:</h3>
				<BlogsList mybog={false} data={data.titles} />
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
			</div></div>
		</div>
	</div>
</div>
