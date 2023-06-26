import { nextResponse } from 'next/server'
import { openDb, runSelectSQL, runSQL, runInsertSQLYieldRowID, closeDb } from 'app/lib/srunner'
import { getPostById, updatePost, deletePost } from '../../../lib/data'
import path from 'path'

const dbPath = path.join(__dirname, '..', '..', '..', '..', '..', '..', 'src', 'data', 'db.sqlite')

// Get a post 
export async function GET(req, res) {    
    //console.log(`id=${req.url.split('blogs/')[1]}`)
    openDb(dbPath)    
    const result = runSelectSQL(`SELECT * FROM posts WHERE id=${res.params.id}`)
    closeDb()

    return nextResponse.json({ success: result.success, 
                               row: result.rows[0] ? result.rows[0] : null }, 
                             { status: result.success ? 200 : 400 } )
}

// Update a post 
export async function PUT(req, res) {
    //console.log(`id=${req.url.split('blogs/')[1]}`)
    try {        
        const id = parseInt(res.params.id)
        const body = await req.json()
        updatePost({id, ...body})
        return nextResponse.json({ message: 'OK'}, { status:200 })
    } catch (err) {
        return nextResponse.json({ message: 'Error'}, { status:500 })
    }
}

// Delete a post 
export async function DELETE(req, res) {
    //console.log(`id=${req.url.split('blogs/')[1]}`)
    // try {
    //     const id = parseInt(res.params.id)
    //     deletePost(id)
    //     return nextResponse.json({ message: 'OK'}, { status:204 })
    // } catch (err) {
    //     return nextResponse.json({ message: 'Error'}, { status:500 })
    // }
    openDb(dbPath)
    const result = runSQL([`DELETE FROM posts WHERE id=${res.params.id}`], true)
    closeDb()

    return nextResponse.json({ ...result }, 
                             { status: result.success ? 200 : 400 } )
}

/*
   Build A Simple CRUD API With Next.js 13 App Router (REST API)
   https://youtu.be/O-NGENb6LNg

   route.js
   https://nextjs.org/docs/app/api-reference/file-conventions/route
*/