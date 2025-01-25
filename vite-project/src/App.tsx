import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import RegistrationForm from './components/RegistrationForm'
import Posts from './components/Posts'
import Navbar from './components/NavBar'
import AppRoutes from './components/Router'
import { BrowserRouter as Router } from 'react-router-dom'
import ParentComponent from './components/ParentComponent'
import { ThemeProvider } from './context/ThemeContext'
import ThemeButton from './components/ThemeButton'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Purushotham');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <ThemeProvider>
     <>
    <ParentComponent></ParentComponent>
    <Router>
    <>
    <Navbar></Navbar>
    <AppRoutes></AppRoutes>
    </>
    </Router>
      <ThemeButton></ThemeButton>
      </>
      </ThemeProvider>
  )
}

export default App
