'use client'

import { motion } from "framer-motion"
import { buttonVariants } from '@/components/atoms/Button'
import { EyeIcon, GithubIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IProjectCardProps { imageSrc: string, name: string, description: string, repoHref: string, demoHref: string }

const ProjectCard = (props: IProjectCardProps) => {

    const { imageSrc, name, description, repoHref, demoHref } = props

    return (
        <motion.div
            initial={{ opacity: 0, y: 100, scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, delay: 0.25 } }}
            className='grid grid-cols-1 md:grid-cols-[.75fr_1fr] overflow-hidden rounded-lg shadow-xl border-2 border-border px-3'>
            <figure className='w-full'>
                <Image src={imageSrc} alt={name} width={500} height={500} className='w-full h-full object-contain' />
            </figure>
            <div className='flex flex-col items-start justify-start'>
                <h1 className='text-xl font-bold capitalize p-4'>
                    {name}
                </h1>
                <p className='text-base p-4 pt-0'>{description}</p>
                <div className='p-4 pt-0 space-x-4'>
                    <Link href={demoHref} className={buttonVariants()}><EyeIcon /> View</Link>
                    <Link href={repoHref} className={buttonVariants()}><GithubIcon /> View Repo</Link>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard