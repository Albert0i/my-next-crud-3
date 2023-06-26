import { getAllPosts } from '@/components/getAllPostsServerAction'
import { DeletePostClientButton } from '@/components/DeletePostClientButton'
import { deletePostServerAction } from '@/components/deletePostServerAction'

export default async function Home() {  
  const data = await getAllPosts()
  
  return (
    <main className='container p-4 mx-auto'>
      <ul className='flex flex-col justify-start list-none'>
          { data.posts.map( post => (
            <li className='mt-1' key={post.id}>{post.title} | {post.desc} | 
              <DeletePostClientButton 
               deletePost={deletePostServerAction} id={post.id} />              
            </li>
          ))}
      </ul>
    </main>
  )
}

/* 
   Reference: 

   1. Server Actions: NextJS 13.4's Best New Feature
      https://youtu.be/czvSZqnpTHs

   2. Next.js Server Actions in 15 min
      https://youtu.be/g1dwTNxGmFQ

   3. Build A Simple CRUD API With Next.js 13 App Router (REST API)
      https://youtu.be/O-NGENb6LNg

   4. NEXTjs Server Actions
      https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions

   5. How to use fetch API in Next.js?
      https://rapidapi.com/guides/how-to-use-fetch-api-in-next-js

   6, How to enable cors in Nextjs 13 Route Handlers
      https://github.com/vercel/next.js/discussions/47933

   7. How to Deploy Nextjs Web Application with PM2
      https://dykraf.com/blog/deploying-nextjs-web-application-with-pm2

   8. The Purloined Letter
      https://poemuseum.org/the-purloined-letter/
*/