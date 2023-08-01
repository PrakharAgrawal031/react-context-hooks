import React from 'react'
import Navbar from './components/Navbar'
import Booklist from './components/Booklist'
import ThemeProvider from './contexts/ThemeContext'
import ToggleTheme from './components/ToggleTheme'
import AuthContextProvider from './contexts/AuthContext'


export default function App() {
    return(
        <div className="App">
        <ThemeProvider>
            <AuthContextProvider>
                <Navbar/>
                <Booklist/>
                <ToggleTheme/>
            </AuthContextProvider>
        </ThemeProvider>
        </div>
    )
}