"use server"
import { sleep } from "@/app/lib/sleep";

export const getAllPosts = async () => {
    try {
        const res = await fetch( `${process.env.API_URL}/blogs`, 
                                    { cache: 'no-store', tags: ['posts'] } );
        const data = await res.json();
        await sleep(1000)
        console.log(`statusCode=${res.status}`)
        return data
    } catch (err) {
        console.log(err.message);
        return { message: err.message }
    }
  }
