'use client'

import React, { useEffect, useState } from 'react'
import Logo from '../moleculs/Logo'
import ThemeSwitcher from '../moleculs/ThemeSwitcher'
import { useIsMobile } from '@/hooks/use-mobile'
import Link from 'next/link'
import LogoIcon from '../atoms/LogoIcon'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import MobileNavMenuList from '../moleculs/navbar/MobileNavMenuList'
import DesktopNavMenuList from '../moleculs/navbar/DesktopNavMenuList'

const Navbar = () => {

    const [isVisible, setIsVisible] = useState(false)

    const isMobile = useIsMobile()
    const { scrollY } = useScroll()

    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (latest > 50) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        })
    }, [scrollY])

    const width = useTransform(scrollY, [0, 415], ['100%', '50%'])

    if (isMobile) {
        return (
            <div className='fixed top-4 left-0 right-0 z-50 w-full px-4 mx-auto flex items-center justify-between'>
                <Link href={'/'} className='rounded-full p-4 supports-backdrop-blur:bg-secondary/50 backdrop-blur-md shadow-xl'>
                    <LogoIcon />
                </Link>
                <MobileNavMenuList className='supports-backdrop-blur:bg-secondary/50 backdrop-blur-md rounded-full p-4 shadow-xl' />
            </div>
        )
    } else {
        return (
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1, left: '50%', translateX: '-50%', transition: { duration: 1, delay: 0.5 } }}
                className={cn(isVisible ? "border border-secondary" : "border border-transparent", 'min-w-[680px] max-w-[80%]  mx-auto fixed top-5 z-50 flex items-center justify-between py-4 px-8 rounded-full bg-muted/50 backdrop-blur-md')}
                style={{ width }}
            >
                <Logo />
                <DesktopNavMenuList />
                <ThemeSwitcher />
            </motion.div>
        )
    }
}

export default Navbar