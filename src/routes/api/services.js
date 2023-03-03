const url = "http://localhost:3000";

export const getAllBlogs = async () => {
	const fullApiPath = `${url}/api/blog/getallblogs`;

	const response = await fetch(fullApiPath, {
		method: "GET", // *GET, POST, PUT, DELETE, etc.
		headers: {
			"Content-Type": "application/json",
			//"auth-token": localStorage.getItem("token"),
		},
	});

	const json = await response.json();
	return json;
};

export const getAllBlogById = async (id) => {
	const fullApiPath = `${url}/api/blog/getblogbyid/${id}`;

	const response = await fetch(fullApiPath, {
		method: "GET", // *GET, POST, PUT, DELETE, etc.
		headers: {
			"Content-Type": "application/json",
			//"auth-token": localStorage.getItem("token"),
		},
	});

	const json = await response.json();
	return json;
};

export const addblog = async (author, title, description, tag) => {
	const fullApiPath = `${url}/api/blog/addblog`;

	const response = await fetch(fullApiPath, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		headers: {
			"Content-Type": "application/json",
			//"auth-token": localStorage.getItem("token"),
		},
		body: JSON.stringify({ author, title, description, tag }),
	});

	const json = await response.json();
	return json;
};

export const getAllTags = async () => {
	const fullApiPath = `${url}/api/blog/getalltags`;

	const response = await fetch(fullApiPath, {
		method: "GET", // *GET, POST, PUT, DELETE, etc.
		headers: {
			"Content-Type": "application/json",
			//"auth-token": localStorage.getItem("token"),
		},
	});

	const json = await response.json();
	return json;
};

export const getAllTitles = async () => {
	const fullApiPath = `${url}/api/blog/getalltitles`;

	const response = await fetch(fullApiPath, {
		method: "GET", // *GET, POST, PUT, DELETE, etc.
		headers: {
			"Content-Type": "application/json",
			//"auth-token": localStorage.getItem("token"),
		},
	});

	const json = await response.json();
	return json;
};