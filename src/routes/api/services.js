import { browser } from "$app/environment";

const url = "http://localhost:3000";
let authToken ="";
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
export const getAllBlogsByUser = async (token) => {
	const fullApiPath = `${url}/api/blog/getuserblogs`;
	const response = await fetch(fullApiPath, {
		method: "GET", // *GET, POST, PUT, DELETE, etc.
		headers: {
			"Content-Type": "application/json",
			"auth-token": token,
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

export const addblog = async (author, title, description, tag,token) => {
	const fullApiPath = `${url}/api/blog/addblog`;

	const response = await fetch(fullApiPath, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		headers: {
			"Content-Type": "application/json",
			"auth-token": token,
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

export const getAllBlogByTag = async (tag) => {
	const fullApiPath = `${url}/api/blog/getallbytag/${tag}`;

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

export const deleteBlogById = async (id,token) => {
	const fullApiPath = `${url}/api/blog/deleteblog/${id}`;

	const response = await fetch(fullApiPath, {
		method: "DELETE", // *GET, POST, PUT, DELETE, etc.
		headers: {
			"Content-Type": "application/json",
			"auth-token": token
		},
	});

	const json = await response.json();
	return json;
};

export const editBlogById = async (id, title, description, author, tag,token) => {
	const fullApiPath = `${url}/api/blog/updateblog/${id}`;

	const response = await fetch(fullApiPath, {
		method: "PUT", // *GET, POST, PUT, DELETE, etc.
		headers: {
			"Content-Type": "application/json",
			"auth-token": token
		},
		body: JSON.stringify({ title, description,author, tag }),
	});

	const json = await response.json();
	return json;
};