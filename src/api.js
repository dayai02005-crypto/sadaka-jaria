const API_URL = 'https://sadaka-jaria.vercel.app/api/memorials'

export const getMemorials = async () => {
    const res = await fetch(API_URL)
    return res.json()
}

export const addMemorial = async (newPerson) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPerson)
    })
    return res.json()
}

export const deleteMemorial = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
    return res.json()
}