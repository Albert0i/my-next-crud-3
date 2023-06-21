"use server"
import { revalidatePath } from "next/cache"
import { sleep } from "@/app/lib/sleep";

export const addPostServerAction = async (title, desc) => {
    try {
      const res = await fetch( `${process.env.API_URL}/blogs`, 
                              { method: 'POST',
                                body: JSON.stringify({ title, desc }) } );      
      await sleep(1000)
      console.log(res.status)
      revalidatePath('/')
    } catch (err) {
        console.log(err);
    }
  }
