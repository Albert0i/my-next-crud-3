"use server"
import { revalidatePath } from "next/cache"
import { sleep } from "@/app/lib/sleep";

export const deletePostServerAction = async (id) => {
    "use server";
    try {
      const res = await fetch( `${process.env.API_URL}/blogs/${id}`, 
                              { method: 'DELETE' } );
      await sleep(1000)
      console.log(res.status)      
      revalidatePath('/')
    } catch (err) {
        console.log(err);
    }      
  }
