'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"
import { SpinningText } from '@/components/atoms/SpinningText'

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
        <motion.div ref={container} initial="hidden" animate={controls} variants={animation} className='absolute top-1/2 -translate-y-1/2 left-0 items-center justify-start gap-28 bg-muted text-muted-foreground py-10 pr-20 pl-4 border border-border rounded-tr-full rounded-br-full hidden md:flex'>
            <div className='flex flex-col items-start justify-center'>
                <span className='flex items-center justify-center'>Located in, </span>
                <span className='flex items-center justify-center'>Bogor, </span>
                <span className='flex items-center justify-center'>Indonesia</span></div>
            <SpinningText>
                learn more • earn more • grow more •
            </SpinningText>
        </motion.div>
    )
}

export default HeroDomicilies