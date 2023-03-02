// import { userSignUp } from "../api/auth";

// /** @type {import('./$types').Actions} */
// export const actions = {
// 	default: async (event) => {
// 		// TODO log the user in
// 	},
// 	register: async ({ cookies, request }) => {
// 		// TODO register the user
// 		const data = await request.formData();

// 		console.log("form data: ", data);
// 		const name = data.get("name");
// 		const username = data.get("username");
// 		const email = data.get("email");
// 		const password = data.get("password");

// 		const response = await userSignUp(name, email, username, password);

// 		cookies.set("token", await response.authToken);

// 		return response.success;
// 	},
// };
