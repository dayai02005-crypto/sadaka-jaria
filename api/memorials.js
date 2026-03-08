let memorials = [
    { id: 1, name: 'أحمد حسن', arabicName: 'أحمد حسن', years: '1942-2024', image: '', relationship: 'Father', dua: 'الفاتحة' }
]

export default function handler(req, res) {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    if (req.method === 'OPTIONS') return res.status(200).end()

    if (req.method === 'GET') {
        return res.status(200).json(memorials)
    }

    if (req.method === 'POST') {
        const newPerson = { id: Date.now(), ...req.body }
        memorials.push(newPerson)
        return res.status(201).json(newPerson)
    }

    if (req.method === 'DELETE') {
        const id = parseInt(req.query.id)
        memorials = memorials.filter(m => m.id !== id)
        return res.status(200).json({ success: true })
    }
}