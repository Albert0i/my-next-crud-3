"use client"
import React from 'react'
import { useState, useTransition } from 'react'

export const AddPostClientForm = ({ addPost }) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [pending, startTransition] = useTransition();
  
  return (
    <main className='container p-4 mx-auto'>
        <div className='my-2'>
          <input type='text' placeholder='title' className='p-2' autoFocus 
                 value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className='my-2'>
          <input type='text' placeholder='description' className='p-2'  
                 value={desc} onChange={e => setDesc(e.target.value)} />
        </div>
        <div className='my-2'>
          <button className='px-2 text-white bg-green-500 rounded hover:bg-green-300 disabled:bg-gray-500'  
                  disabled={pending} 
                  onClick={async () => {
                                          startTransition(async () => { 
                                            await addPost(title, desc) 
                                          });
                                        }}
                  >Add
          </button>
        </div>
    </main>
  )
}
