function ProjectCard({ project, deleteProject }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border hover:shadow-sm transition">

      <div>
        <h3 className="font-semibold text-gray-800">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500">
          {project.description}
        </p>
      </div>

      <button
        onClick={() => deleteProject(project.id)}
        className="text-red-500 hover:text-red-700 text-lg"
      >
        ✕
      </button>

    </div>
  )
}

export default ProjectCard