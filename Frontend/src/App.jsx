import { useEffect, useState } from "react"
import ProjectForm from "./components/ProjectForm"
import ProjectList from "./components/ProjectList"
import SearchBar from "./components/SearchBar"

function App() {
  const [projects, setProjects] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then(res => res.json())
      .then(setProjects)
  }, [])

  function addProject(project) {
    fetch("http://localhost:3001/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project)
    })
      .then(res => res.json())
      .then(newProject => setProjects(prev => [...prev, newProject]))
  }

  function deleteProject(id) {
    fetch(`http://localhost:3001/projects/${id}`, {
      method: "DELETE"
    }).then(() => {
      setProjects(prev => prev.filter(p => p.id !== id))
    })
  }

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-6">

        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Bizisha Project Showcase
        </h1>

        <ProjectForm addProject={addProject} />

        <div className="bg-white p-4 rounded-2xl shadow-md space-y-4">
          <SearchBar search={search} setSearch={setSearch} />

          <ProjectList
            projects={filteredProjects}
            deleteProject={deleteProject}
          />
        </div>

      </div>
    </div>
  )
}

export default App