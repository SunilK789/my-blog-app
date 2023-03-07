
import { userLogin } from "../api/auth";
import { redirect } from '@sveltejs/kit';
import { authToken } from "../store";

/** @type {import('./$types').Actions} */
export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();

    const email = data.get('email');
    const password = data.get('password');
   var token = await userLogin(email, password);
   
   cookies.set("token", token.authToken, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			secure: true,
			maxAge: 60 * 60 * 24 * 30,
		});
 
        if(token.success){
            authToken.set(token.authToken);
           throw redirect(301, "/blog");
        }
  }}