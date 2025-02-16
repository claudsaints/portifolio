import { projects } from "@/app/data/project.ts";
import ProjectCard from "@/app/components/ProjectCard";
export default function Project(){
  return(
    <>

        <div className="projects-container mb-5" id="projects">

      <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
              />
            ))}
          </div>
              </div>

    </>
  )
}
