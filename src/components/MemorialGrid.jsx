import { useState } from 'react'
import './MemorialGrid.css'

function MemorialGrid({ memorials, onSelect }) {
    const [searchTerm, setSearchTerm] = useState('')

    const filtered = memorials.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.arabicName.includes(searchTerm)
    )

    return (
        <div className="grid-container" dir="rtl">
            <h1 className="grid-title">في ذمة الله</h1>
            <p className="grid-subtitle">الذين انتقلوا إلى رحمة الله</p>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="ابحث بالاسم..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            <div className="memorial-grid">
                {filtered.map((person) => (
                    <div
                        key={person.id}
                        className="memorial-card"
                        onClick={() => onSelect(person)}
                    >
                        <div className="card-image">
                            <img src={person.image} alt={person.name} />
                        </div>
                        <div className="card-content">
                            <h3>{person.name}</h3>
                            <p className="arabic-name">{person.arabicName}</p>
                            <p className="years">{person.years}</p>
                            <p className="relationship">{person.relationship}</p>
                            <p className="short-dua">الفاتحة</p>
                        </div>
                    </div>
                ))}
            </div>

            {filtered.length === 0 && (
                <p className="no-results">لا توجد نتائج</p>
            )}
        </div>
    )
}

export default MemorialGrid