import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), 'db.json')
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    if (req.method === 'GET') {
        res.status(200).json(data.memorials)
    }

    else if (req.method === 'POST') {
        const newPerson = { id: Date.now(), ...req.body }
        data.memorials.push(newPerson)
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        res.status(201).json(newPerson)
    }

    else if (req.method === 'DELETE') {
        const id = parseInt(req.query.id)
        data.memorials = data.memorials.filter(m => m.id !== id)
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
        res.status(200).json({ message: 'Deleted' })
    }
}