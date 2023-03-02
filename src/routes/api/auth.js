const host = "http://localhost:3000";

//ROUTE 1: get link by "/api/links/getalllinks"
export const userSignUp = async (name, email, username, password) => {
	const response = await fetch(`${host}/api/auth/createuser`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: name,
			email: email,
			username: username,
			password: password,
		}), // body data type must match "Content-Type" header
	});
	return await response.json();
};
export const userLogin = async (email, password) => {
	const response = await fetch(`${host}/api/auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: email,
			password: password,
		}), // body data type must match "Content-Type" header
	});
	return await response.json();
};

export const checkUniqueUserName = async (username) => {
	const response = await fetch(`${host}/api/auth/checkusername`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: username,
		}), // body data type must match "Content-Type" header
	});
	return await response.json();
};

export const checkUniqueEmail = async (email) => {
	const response = await fetch(`${host}/api/auth/checkemail`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: email,
		}), // body data type must match "Content-Type" header
	});
	return await response.json();
};

export const getUserProfile = async () => {
	const response = await fetch(`${host}/api/profiles/getprofile`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"auth-token": localStorage.getItem("token"),
		},
	});
	return await response.json();
};

export const getUserByUserName = async (username) => {
	const response = await fetch(
		`${host}/api/profiles/getpublicprofile/${username}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
		}
	);
	return await response.json();
};
