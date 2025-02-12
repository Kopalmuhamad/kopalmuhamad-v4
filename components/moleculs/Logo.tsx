import React from 'react'
import { motion } from 'framer-motion'
import LogoIcon from '../atoms/LogoIcon'
import LogoText from '../atoms/LogoText'

const Logo = () => {
    return (
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 0.75 } }} href={'/'} className='flex items-center justify-start gap-2'>
            <LogoIcon />
            <LogoText />
        </motion.a>
    )
}

export default Logo