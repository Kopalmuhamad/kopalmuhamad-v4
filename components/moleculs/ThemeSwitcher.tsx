'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState, memo } from 'react'
import { motion } from "framer-motion"
import { MoonStarIcon, SunDimIcon } from 'lucide-react'

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <motion.div initial={{ opacity: 0.8 }} animate={{ opacity: 1, transition: { duration: 1, delay: 0.75 } }}>
            {theme === "light" ? (
                <SunDimIcon className='cursor-pointer' size={24} onClick={() => setTheme('dark')} />
            ) : (
                <MoonStarIcon className='cursor-pointer' size={24} onClick={() => setTheme('light')} />
            )}
        </motion.div>
    )
}

export default memo(ThemeSwitcher)