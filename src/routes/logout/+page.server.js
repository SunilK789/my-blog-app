import { redirect } from "@sveltejs/kit";
import { authToken } from "../store";

export async function load({events, cookies }) {
        //await cookies.delete('token');
        cookies.set("token", '', {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			secure: true,
			maxAge: -1,
		});
        
        const token = cookies.get('token');
        console.log("token after logout: ",token);
        authToken.set(null);

	return {
		token: token
	};
}