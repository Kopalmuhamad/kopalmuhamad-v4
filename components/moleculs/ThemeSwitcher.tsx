'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Button } from '../atoms/Button'
import { motion } from "framer-motion"

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const changeTheme = () => {
        if (theme == "light") setTheme("dark")
        if (theme == "dark") setTheme("light")
    }

    if (!mounted) return null

    return (
        <motion.div initial={{ opacity: 0.8 }} animate={{ opacity: 1, transition: { duration: 1, delay: 0.75 } }}>
            <Button variant={'ghost'} size={'icon'} onClick={changeTheme}>
                {theme === "light" ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun-dim">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 4h.01" />
                        <path d="M20 12h.01" />
                        <path d="M12 20h.01" />
                        <path d="M4 12h.01" />
                        <path d="M17.657 6.343h.01" />
                        <path d="M17.657 17.657h.01" />
                        <path d="M6.343 17.657h.01" />
                        <path d="M6.343 6.343h.01" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon-star">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
                        <path d="M20 3v4" />
                        <path d="M22 5h-4" />
                    </svg>
                }
            </Button>
        </motion.div>
    )
}

export default ThemeSwitcher