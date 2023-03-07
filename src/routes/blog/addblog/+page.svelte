<script>
	import { addblog } from "../../api/services";

	export let data;
	let title = "";
	let description = "";
	let author = "";
	let tag = "";

	const handleClearButton = () => {
		title = "";
		description = "";
		author = "";
		tag = "";
	};

	const handleSaveButton = async () => {
		const token = data.token;

	console.log("token from cookies add blog: ",token);

		const res = await addblog(author, title, description, tag,token);
		if (res.success) {
			console.log("Blog added successfully!");
			alert("Blog added successfully!");
			handleClearButton();
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
			<a href="/blog" class="btn btn-secondary mx-2">Cancel</a>
			<button class="btn btn-info mx-2" on:click={handleClearButton}>
				Clear
			</button>
		</div>
	</form>
</div>
