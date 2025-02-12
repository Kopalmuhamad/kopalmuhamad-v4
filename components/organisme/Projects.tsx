import React from 'react'
import Container from '../template/Container'
import ProjectHeader from '../moleculs/projects/ProjectHeader'
import Line from '../atoms/Line'

const Projects = () => {
    return (
        <section id="projects" className='relative overflow-hidden'>
            <div className='relative py-10'>
                <Line />
            </div>
            <Container>
                <ProjectHeader />
            </Container>
        </section>
    )
}

export default Projects