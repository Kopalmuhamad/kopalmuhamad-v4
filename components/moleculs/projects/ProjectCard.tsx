'use client'
import { motion } from "framer-motion"
import { buttonVariants } from '@/components/atoms/Button'
import { EyeIcon, GithubIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface IProjectCardProps { imageSrc: string, name: string, repoHref: string, demoHref: string }

const ProjectCard = (props: IProjectCardProps) => {

    const { imageSrc, name, repoHref, demoHref } = props

    return (
        <div className="overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, delay: 0.25 } }}
                className='grid grid-cols-1 overflow-hidden rounded-lg shadow-xl border-2 border-border px-3 max-w-[450px]'>
                <figure className='w-full'>
                    <img src={imageSrc} alt={name} width={500} height={500} className='w-full h-full object-contain' />
                </figure>
                <div className='flex flex-col items-start justify-end'>
                    <h1 className='text-xl font-bold capitalize p-4'>
                        {name}
                    </h1>
                    <div className='p-4 pt-0 space-x-4'>
                        <Link href={demoHref} className={buttonVariants()}><EyeIcon /> View</Link>
                        <Link href={repoHref} className={buttonVariants()}><GithubIcon /> View Repo</Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCard