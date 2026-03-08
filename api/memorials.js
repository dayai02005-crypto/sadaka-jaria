let memorials = [
    { id: 1, name: 'Anis Ghezal', arabicName: 'أنيس غزال', years: '2005-2026', image: '/images/anis.png', relationship: 'صديق عزيز', dua: 'اللهم اغفر له وارحمه، وعافه واعف عنه، وأكرم نزله، ووسع مدخله، واغسله بالماء والثلج والبرد، ونقه من الخطايا كما ينقى الثوب الأبيض من الدنس' }
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
