import { useEffect, useState } from 'react'
import AdminPanel from './AdminPanel'
import { getMemorials } from './api'
import './App.css'
import MemorialGrid from './components/MemorialGrid'
import Login from './Login'
import MemorialPage from './MemorialPage'

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [showAdmin, setShowAdmin] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [memorials, setMemorials] = useState([])

  useEffect(() => {
    getMemorials().then(setMemorials)

    if (window.location.pathname === '/addsomeone') {
      setShowLogin(true)
      window.history.pushState({}, '', '/')
    }
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      if (selectedPerson) {
        setSelectedPerson(null)
      } else if (showAdmin) {
        setShowAdmin(false)
        setIsAuthenticated(false)
      } else if (showLogin) {
        setShowLogin(false)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [selectedPerson, showAdmin, showLogin])

  const handleSelectPerson = (person) => {
    setSelectedPerson(person)
    window.history.pushState({ page: 'person' }, '')
  }

  const handleBack = () => {
    if (selectedPerson) {
      setSelectedPerson(null)
      window.history.back()
    } else if (showAdmin) {
      setShowAdmin(false)
      setIsAuthenticated(false)
      window.history.back()
    } else if (showLogin) {
      setShowLogin(false)
      window.history.back()
    }
  }

  const handleLogin = (password) => {
    if (password === 'admin123') {
      setIsAuthenticated(true)
      setShowLogin(false)
      setShowAdmin(true)
      window.history.pushState({ page: 'admin' }, '')
    } else {
      alert('كلمة المرور خطأ')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setShowAdmin(false)
    window.history.back()
  }

  if (showLogin) {
    return <Login onLogin={handleLogin} onBack={handleBack} />
  }

  if (showAdmin && isAuthenticated) {
    return (
      <AdminPanel
        memorials={memorials}
        setMemorials={setMemorials}
        onBack={handleLogout}
      />
    )
  }

  if (selectedPerson) {
    return <MemorialPage person={selectedPerson} onBack={handleBack} />
  }

  return <MemorialGrid memorials={memorials} onSelect={handleSelectPerson} />
}

export default App