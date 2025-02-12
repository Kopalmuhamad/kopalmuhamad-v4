'use client'
import React from 'react'
import { motion } from 'framer-motion'
import NavListItem from '@/components/atoms/NavListItem'

const navMenu = [
    {
        href: '/',
        title: 'Home'
    },
    {
        href: '/about',
        title: 'About Me'
    },
    {
        href: '/recent-project',
        title: 'Recent Projects'
    },
    {
        href: '/contact',
        title: 'Contact'
    }
]

const DesktopNavMenuList = () => {

    const animation = {
        hidden: {
            y: -20,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    }

    return (
        <motion.ul initial='hidden' animate='visible' transition={{ delayChildren: 1, staggerChildren: 0.25 }} className='flex items-center justify-center gap-4'>
            {navMenu.map((item, index) => (
                <motion.li key={index} variants={animation} >
                    <NavListItem href={item.href} title={item.title} />
                </motion.li>
            ))}
        </motion.ul>
    )
}

export default DesktopNavMenuList