'use client'
import React, { useEffect, useState } from 'react'
import { ChevronUpIcon } from 'lucide-react'
import { useScroll } from 'framer-motion'

const ButtonToTop = () => {
    const { scrollY } = useScroll()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (latest > 100) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        })
    }, [scrollY])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        isVisible && (
            <ChevronUpIcon size={20} onClick={scrollToTop} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
        )
    )
}

export default ButtonToTop