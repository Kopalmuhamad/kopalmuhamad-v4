import React, { useEffect, useState } from 'react'
import Container from '../template/Container'
import ProjectHeader from '../moleculs/projects/ProjectHeader'
import Line from '../atoms/Line'
import ProjectCard from '../moleculs/projects/ProjectCard'
import axios from 'axios'
import Swal from 'sweetalert2'

interface IPortfolio {
    id: number,
    name: string;
    imageSrc: string;
    repoHref: string;
    demoHref: string;
}

const Projects = () => {

    const [portfolios, setPortfolios] = useState<IPortfolio[]>([])

    const getPortfolio = async () => {
        try {
            const { data } = await axios.get("/data/portfolio.json")
            setPortfolios(data)
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong, please refresh or try again later',
            })
        }
    }

    useEffect(() => {
        getPortfolio()
    }, [])

    return (
        <section id="projects" className='relative overflow-hidden pb-20'>
            <div className='relative py-10'>
                <Line />
            </div>
            <Container>
                <ProjectHeader />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto mt-20 gap-4'>
                    {portfolios.map((portfolio) => (
                        <ProjectCard key={portfolio.id} name={portfolio.name} repoHref={portfolio.repoHref!} demoHref={portfolio.demoHref!} imageSrc={portfolio.imageSrc} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Projects