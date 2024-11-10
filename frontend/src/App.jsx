import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import React, { useState } from 'react';

export const ThemeContext = React.createContext();

function App() {
    const [isDark, setIsDark] = useState(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        if (mq.matches) {
            document.body.classList.add('dark-theme');
        }
        return mq.matches;
    });

    return (
        <ThemeContext.Provider value={[isDark, setIsDark]}>
            <Header />
            <Outlet />
        </ThemeContext.Provider>
    )
}

export default App
