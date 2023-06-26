import { AddPostClientForm } from '@/components/AddPostClientForm'
import { addPostServerAction } from '@/components/addPostServerAction'

export default async function Add() {     
  return (
    <AddPostClientForm addPost={addPostServerAction} />
  )
}

/*
   Server Actions: NextJS 13.4's Best New Feature
   https://youtu.be/czvSZqnpTHs

   How to use fetch API in Next.js?
   https://rapidapi.com/guides/how-to-use-fetch-api-in-next-js
*/