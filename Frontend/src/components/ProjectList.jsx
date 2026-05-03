import ProjectCard from "./ProjectCard"

function ProjectList({ projects, deleteProject }) {
  if (projects.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No projects available
      </p>
    )
  }

  return (
    <div className="space-y-3">
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          deleteProject={deleteProject}
        />
      ))}
    </div>
  )
}

export default ProjectList