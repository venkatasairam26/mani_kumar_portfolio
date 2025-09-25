import './projects.css'
import projectsList from '../../projects-list'
const Projects = () => {
    console.log(projectsList)
    return (
        <div className="projects container" id="projects">
            <h1>Projects</h1>
            <div className="projects-list">
                {
                    projectsList.map((project) => (
                        <div className="project">
                            <img src={project.image} alt={project.name} className="project-img"/>
                            <h2>{project.name}</h2>
                            <a href={project.image} target="_blank" viewBox="0 0 16 16"  rel="noopener noreferrer">View Project</a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Projects
