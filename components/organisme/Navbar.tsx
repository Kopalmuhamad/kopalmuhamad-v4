'use client'

import React from 'react'
import { useIsMobile } from '@/hooks/use-mobile'
import DesktopNavbar from '../moleculs/navbar/DesktopNavbar'
import { MobileNavbar } from '../moleculs/navbar/MobileNavbar'

const Navbar = () => {
    const isMobile = useIsMobile()

    if (isMobile) {
        return (
            <MobileNavbar />
        )
    } else {
        return (
            <DesktopNavbar />
        )
    }
}

export default Navbar