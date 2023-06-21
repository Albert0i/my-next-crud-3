"use server"
import { sleep } from "@/app/lib/sleep";

export const getAllPosts = async () => {
    try {
        const res = await fetch( `${process.env.API_URL}/blogs`, { cache: 'no-store' } );
        const data = await res.json();
        await sleep(1000)
        return data
    } catch (err) {
        console.log(err);
        return { message: err.message }
    }
  }
