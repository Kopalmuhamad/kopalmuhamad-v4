'use client'
import { GlobeIcon } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"

const HeroDomicilies = () => {
    const container = useRef<HTMLDivElement>(null)
    const isInView = useInView(container)
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        } else {
            controls.start('hidden')
        }
    }, [isInView, controls])

    const animation = {
        hidden: {
            opacity: 0, left: -100
        },
        visible: {
            opacity: 1, left: 0, transition: { duration: 1, delay: 1.5 }
        }
    }

    return (
        <motion.div ref={container} initial="hidden" animate={controls} variants={animation} className='absolute top-1/2 -translate-y-1/2 left-0 items-center justify-start gap-12 bg-muted text-muted-foreground py-4 pl-12 pr-12 border border-border rounded-tr-full rounded-br-full hidden md:flex'>
            <div className='flex flex-col items-start justify-center'>
                <span className='flex items-center justify-center text-sm'>Located in, </span>
                <span className='flex items-center justify-center text-sm'>Bogor, </span>
                <span className='flex items-center justify-center text-sm'>Indonesia</span></div>
            <div>
                <GlobeIcon size={60} />
            </div>
        </motion.div>
    )
}

export default HeroDomicilies