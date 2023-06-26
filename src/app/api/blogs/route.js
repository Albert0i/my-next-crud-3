import { nextResponse } from 'next/server'
import { openDb, runSelectSQL, runInsertSQLYieldRowID, closeDb } from '../../lib/srunner'
import path from 'path'

const dbPath = path.join(__dirname, '..', '..', '..', '..', '..', 'src', 'data', 'db.sqlite')

// Get all posts 
export async function GET(req, res) {
    openDb(dbPath, null)
    const result = runSelectSQL('SELECT * FROM posts ORDER BY id')
    closeDb()

    return nextResponse.json(result, { status: result.success ? 200 : 400 } )
}

// Create a post 
export async function POST(req, res) {
    const body = await req.json()
    openDb(dbPath, null)
    const result = runInsertSQLYieldRowID(`INSERT INTO posts (title, desc) values('${body.title}', '${body.desc}')`)
    closeDb()
    
    return nextResponse.json(result, { status: result.success ? 201 : 400 } )
}

/*
   Build A Simple CRUD API With Next.js 13 App Router (REST API)
   https://youtu.be/O-NGENb6LNg

   route.js
   https://nextjs.org/docs/app/api-reference/file-conventions/route
*/