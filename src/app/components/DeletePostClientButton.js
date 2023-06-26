"use client"
import React from 'react'
import { useTransition } from 'react'

export const DeletePostClientButton = ({deletePost, id}) => {
  const [pending, startTransition] = useTransition();

  return (
    <button className='px-2 text-white bg-red-500 rounded hover:bg-red-300 disabled:bg-gray-500'
    disabled={pending} 
    onClick={async () => {
                            startTransition(async () => { 
                                                          await deletePost(id) 
                                                        });
                            
                         }}
    >Delete</button>
  )
}
