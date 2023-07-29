import React from 'react'
import Navbar from './components/Navbar'
import Booklist from './components/Booklist'
import ThemeProvider from './contexts/ThemeContext'


export default function App() {
    return(
        <div className="App">
        <ThemeProvider>
            <Navbar/>
            <Booklist/>
        </ThemeProvider>
        </div>
    )
}