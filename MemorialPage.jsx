import './MemorialPage.css'

function MemorialPage({ person, onBack }) {
    return (
        <div className="memorial-page" dir="rtl">
            <button onClick={onBack} className="back-button">
                → رجوع
            </button>

            <div className="container">
                <div className="card">
                    <div className="image-section">
                        <div className="image-frame">
                            <img
                                src={person.image}
                                alt={person.name}
                                className="portrait"
                            />
                        </div>
                    </div>

                    <div className="name-section">
                        <h1>في ذمة الله</h1>
                        <p className="name">{person.name}</p>
                        <p className="arabic-name-large">{person.arabicName}</p>
                        <p className="relationship">{person.relationship}</p>
                        <p className="dates">{person.years}</p>
                    </div>

                    <div className="quran-section">
                        <p className="arabic">
                            إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
                        </p>
                        <p className="translation">
                            "إنا لله وإنا إليه راجعون"
                        </p>
                        <p className="reference">البقرة ١٥٦</p>
                    </div>

                    <div className="dua-section">
                        <p className="dua-arabic">{person.dua}</p>
                        <p className="fatiha">الفاتحة</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemorialPage