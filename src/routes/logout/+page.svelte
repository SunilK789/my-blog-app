<script>
  import { authToken } from "../store";


    export let data;
    let isLoggedInUser = true;
    console.log("data.token: ",data.token);
    console.log("data.token === ''",data.token==='');
    if(!data.token)
    {
        console.log("inside logout page token: ",data.token);
        isLoggedInUser=false;
        authToken.set(null);
    }
</script>

<div>
   {#if !isLoggedInUser }
   <span>Logout successfull!</span>
   {/if}
</div>