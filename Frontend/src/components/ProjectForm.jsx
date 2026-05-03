import { useState } from "react"

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (!title || !description) return

    addProject({ title, description })

    setTitle("")
    setDescription("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 sm:p-6 rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-lg font-semibold">Add Project</h2>

      <input
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Project title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Project description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <button
        type="submit"
        className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add Project
      </button>
    </form>
  )
}

export default ProjectForm