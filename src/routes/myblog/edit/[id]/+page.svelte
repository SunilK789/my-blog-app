<script>
  import { goto } from "$app/navigation";
	import { editBlogById } from "../../../api/services";
  import { storedBlogs } from "../../../store";

	export let data=[];
	console.log("data from edit [id] page.svelte: ",data);
	let title = data.blog.title;
	let description = data.blog.description;
	let author = data.blog.author;
	let tag = data.blog.tag;
	let id = data.blog._id;

	const handleClearButton = () => {
		title = "";
		description = "";
		author = "";
		tag = "";
	};

	const handleSaveButton = async () => {
		const token = data.token;

		const res = await editBlogById(id, title, description, tag,author, token);
		console.log("res after update: ",res);
		if (res.success) {

			let blogs = $storedBlogs;
			for (let index = 0; index < blogs.length; index++) {
				//const element = blogs[index];
				console.log("blogs[index]._id: ",blogs[index]._id);
				console.log("res._id: ",res.blog._id);
				if(blogs[index]._id === res.blog._id)
				{

					blogs[index].title = res.blog.title,
					console.log("blogs[index].title: ",blogs[index].title);
					console.log("res.title: ",res.blog.title);

					blogs[index].description = res.blog.description,
					blogs[index].tag = res.blog.tag,
					blogs[index].author = res.blog.author
					break;
				}
				
			}
			console.log("blogs after update: ",blogs);

			storedBlogs.set(blogs);

			console.log("storedBlogs after update: ",$storedBlogs);

			console.log("Blog edited successfully!");			
			goto(`/myblog/${id}`)
		}
	};
</script>

<div class="container">
	<form type="submit">
		<div class="mb-3">
			<label for="title" class="form-label">Title</label>
			<input
				type="text"
				class="form-control"
				id="title"
				placeholder="add title..."
				required
				bind:value={title}
			/>
		</div>
		<div class="mb-3">
			<label for="description" class="form-label">Description</label>
			<textarea
				class="form-control"
				id="description"
				rows="15"
				required
				bind:value={description}
			/>
		</div>
		<div class="mb-3">
			<label for="tag" class="form-label">Tag</label>
			<input
				type="text"
				class="form-control w-50"
				id="tag"
				placeholder="add tags..."
				required
				bind:value={tag}
			/>
		</div>
		<div class="mb-3">
			<label for="author" class="form-label">Author</label>
			<input
				type="text"
				class="form-control w-50"
				id="author"
				placeholder="add author..."
				required
				bind:value={author}
			/>
		</div>
		<div class="mb-3">
			<button
				class="btn btn-primary"
				on:click={handleSaveButton}
				disabled={title.length < 4 || description.length < 10}
			>
				Save
			</button>
			<a href="/myblog" class="btn btn-secondary mx-2">Cancel</a>
			<!-- <button class="btn btn-info mx-2" on:click={handleClearButton}>
				Clear
			</button> -->
		</div>
	</form>
</div>
