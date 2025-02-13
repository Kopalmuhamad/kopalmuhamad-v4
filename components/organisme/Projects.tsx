import React from 'react'
import Container from '../template/Container'
import ProjectHeader from '../moleculs/projects/ProjectHeader'
import Line from '../atoms/Line'
import ProjectCard from '../moleculs/projects/ProjectCard'
import Link from 'next/link'
import { buttonVariants } from '../atoms/Button'

const portfolio = [
    {
        id: 1,
        name: "Easyshop",
        description: `Easyshop is an application designed to be ecommerce. It simplifies the process for users to purchase a products. In the development of Easyshop, I served as the fullstack engineer. I was responsible for working on several key aspects of the application's interface, including the home page, chat feature, booking list, integrating APIs. The technologies used in this project include Figma for responsive design, MERN is the main tech stack, and Tailwind CSS for styling`,
        demoHref: "https://easyshop-five.vercel.app/",
        repoHref: "https://github.com/Kopalmuhamad/easyshop-client",
        imageSrc: '/portfolio/easyshop.png'
    },
    {
        id: 2,
        name: "Excelent Car",
        description: `Excelent car is an application created for a car rental company that wants to enter the digital world by providing a car rental provider website that can be booked or ordered directly through the website. in this project I work as a fullstack developer using express js for the backend and react vite for the frontend or what we usually call MERN.`,
        demoHref: "https://excelent-car.vercel.app/",
        repoHref: "https://github.com/Kopalmuhamad/excelent-car-client",
        imageSrc: '/portfolio/excelent-car.png'
    },
]

const Projects = () => {
    return (
        <section id="projects" className='relative overflow-hidden pb-20'>
            <div className='relative py-10'>
                <Line />
            </div>
            <Container>
                <ProjectHeader />
                <div className='grid grid-cols-1 max-w-3xl md:max-w-4xl mx-auto mt-20 gap-4'>
                    {portfolio.map((portfoli) => (
                        <ProjectCard key={portfoli.id} name={portfoli.name} description={portfoli.description} repoHref={portfoli.repoHref!} demoHref={portfoli.demoHref!} imageSrc={portfoli.imageSrc} />
                    ))}
                </div>
                <div className='text-center mt-4'>
                    <Link className={buttonVariants({ variant: "link" })} href={'/project'}>
                        View All
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export default Projects