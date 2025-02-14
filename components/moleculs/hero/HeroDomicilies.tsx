'use client'

import React from 'react'
import { motion } from "framer-motion"
import { SpinningText } from '@/components/atoms/SpinningText'

const HeroDomicilies = React.memo(() => {
    const animation = {
        hidden: { opacity: 0, x: -100 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.8, 
                ease: "easeOut" 
            } 
        }
    }

    return (
        <motion.aside
            initial="hidden"
            whileInView="visible"
            variants={animation}
            viewport={{ once: true, amount: 0.3 }}
            className='absolute top-1/2 -translate-y-1/2 left-0 items-center justify-start gap-28 bg-muted text-muted-foreground py-10 pr-20 pl-4 border border-border rounded-tr-full rounded-br-full hidden md:flex'
        >
            <address className='flex flex-col items-start justify-center not-italic'>
                <span>Located in,</span>
                <span>Bogor,</span>
                <span>Indonesia</span>
            </address>
            <SpinningText>
                learn more • earn more • grow more •
            </SpinningText>
        </motion.aside>
    )
})

HeroDomicilies.displayName = 'HeroDomicilies'

export default HeroDomicilies
