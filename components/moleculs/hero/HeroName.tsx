'use client'
import { cn } from '@/lib/utils'
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

interface IHeroNameProps {
    text: string
    containerClassName?: string
    textClassName?: string
}

const HeroName = ({ text, containerClassName, textClassName }: IHeroNameProps) => {
    const container = useRef<HTMLDivElement>(null)
    const isInView = useInView(container)
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [isInView, controls])

    const animation = {
        hidden: {
            opacity: 0,
            y: -100
        }, visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <motion.div
            className={cn(containerClassName, "flex items-center justify-center flex-col text-center gap-16")}
            ref={container}
            initial="hidden"
            animate={controls}
            transition={{
                delayChildren: 1.5,
                staggerChildren: 0.25,
                ease: "easeOut",
            }}
        >
            {text.split(' ').map((char, index) => (
                <motion.div key={index} className='overflow-hidden'>
                    <motion.span
                        className={cn(textClassName, "flex items-center justify-center leading-none")}
                        variants={animation}
                    >
                        {char}
                    </motion.span>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default HeroName