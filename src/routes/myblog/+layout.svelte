<script>
	import { authToken, LoggedInUser,storedBlogs, storedBlogsList } from "../store";
	import BlogsList from "../components/BlogsList.svelte";
  import { goto } from "$app/navigation";
	
	export let data = [];
	if(data.authToken === '')
	{
		goto('/login');
	}
	const loggedInUser = data.authToken;
	authToken.set(data.authToken);
	storedBlogs.set(data.blogs);

	let blogItems = data.blogs;

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

	storedBlogs.subscribe((value)=>{		
			blogItems = $storedBlogsList;
	})
	
	$: blogs = $storedBlogsList;
</script>

<div class="container">
	<div class="row">
		<div class="col-8">
			<slot />
		</div>
		<div class="col-4">
			<div class="pt-5">
				<div class="border-blue my-5">
					{#if loggedInUser}
						<a class="btn btn-primary mb-4" href="/blog/addblog">Add Blog</a>
					{/if}
					<h3>Blogs:</h3>
					<BlogsList myblog={true} data={blogs} />
				</div>
				<div class="col-12">
					<div class="row d-flex">
						<!-- <h3 class="my-4">Tags:</h3>
						<div>
							{#each Object.values(filteredTags) as tags}
								<Tags {tags} />
							{/each}
						</div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
