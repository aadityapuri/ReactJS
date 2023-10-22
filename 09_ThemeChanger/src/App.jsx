import { useState } from 'react'
import './App.css'
import { ThemeContext, ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'
import ThemeBtn from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [theme, setTheme] = useState('dark')

  const lightTheme = ()=>{
    setTheme('light')
  }
  const darkTheme = ()=>{
    setTheme('dark')
  }

  //actual theme change

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(theme)
  },[theme])

  return (
    <ThemeProvider value={{theme, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
  </ThemeProvider>
  )
}
export default App
