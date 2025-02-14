'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import DesktopNavMenuList from "./DesktopNavMenuList"
import ThemeSwitcher from "../ThemeSwitcher"
import { Code2Icon } from 'lucide-react'

const DesktopNavbar = React.memo(() => {
    const [isVisible, setIsVisible] = useState(false)
    const { scrollY } = useScroll()

    const handleScroll = useCallback((latest: number) => {
        setIsVisible(latest > 50)
    }, [])

    useEffect(() => {
        const unsubscribe = scrollY.on("change", handleScroll)
        return () => unsubscribe()
    }, [scrollY, handleScroll])

    const width = useTransform(scrollY, [0, 415], ['100%', '50%'])

    return (
        <motion.header
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1, left: '50%', translateX: '-50%', transition: { duration: 1, delay: 0.5 } }}
            className={cn(
                isVisible ? "border border-secondary" : "border border-transparent",
                'min-w-[680px] max-w-[80%] mx-auto fixed top-5 z-50 flex items-center justify-between py-4 px-8 rounded-full bg-muted/50 backdrop-blur-md'
            )}
            style={{ width }}
        >
            <Code2Icon />
            <DesktopNavMenuList />
            <ThemeSwitcher />
        </motion.header>
    )
})

DesktopNavbar.displayName = "DesktopNavbar"

export default DesktopNavbar
