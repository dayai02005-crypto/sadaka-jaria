import { useState } from 'react'
import './AdminPanel.css'
import { addMemorial, deleteMemorial } from './api'

function AdminPanel({ memorials, setMemorials, onBack }) {
    const [form, setForm] = useState({
        name: '', arabicName: '', years: '', image: '', relationship: '', dua: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPerson = await addMemorial({
            ...form,
            image: form.image || '/images/placeholder.jpg'
        })
        setMemorials([...memorials, newPerson])
        setForm({ name: '', arabicName: '', years: '', image: '', relationship: '', dua: '' })
    }

    const handleDelete = async (id) => {
        await deleteMemorial(id)
        setMemorials(memorials.filter(p => p.id !== id))
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className="admin-panel" dir="rtl">
            <button onClick={onBack} className="back-button">→ رجوع</button>

            <h2>إضافة شخص جديد</h2>

            <form onSubmit={handleSubmit} className="admin-form">
                <input name="name" placeholder="الاسم (إنجليزي)" value={form.name} onChange={handleChange} required />
                <input name="arabicName" placeholder="الاسم (عربي)" value={form.arabicName} onChange={handleChange} required />
                <input name="years" placeholder="التواريخ" value={form.years} onChange={handleChange} required />
                <input name="image" placeholder="مسار الصورة" value={form.image} onChange={handleChange} />
                <input name="relationship" placeholder="صلة القرابة" value={form.relationship} onChange={handleChange} required />
                <input name="dua" placeholder="الدعاء" value={form.dua} onChange={handleChange} required />
                <button type="submit">إضافة</button>
            </form>

            <h3>الأشخاص المضافون</h3>
            <div className="admin-list">
                {memorials.map(p => (
                    <div key={p.id} className="admin-item">
                        <span>{p.name}</span>
                        <button onClick={() => handleDelete(p.id)} className="delete-btn">حذف</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminPanel