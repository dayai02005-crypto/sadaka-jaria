import { useState } from 'react'
import './Login.css'

function Login({ onLogin, onBack }) {
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onLogin(password)
    }

    return (
        <div className="login-container" dir="rtl">
            <button onClick={onBack} className="back-button">→ رجوع</button>

            <div className="login-card">
                <h2>الدخول للإدارة</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="كلمة المرور"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoFocus
                    />
                    <button type="submit">دخول</button>
                </form>
            </div>
        </div>
    )
}

export default Login