import Link from 'next/link'

export default function ProjectCard({ project }){
  return (
    <article className="p-6 border rounded hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{project.desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-500">{project.type}</span>
        <a href={project.repo} target="_blank" rel="noreferrer" className="text-blue-600">Repository</a>
      </div>
    </article>
  )
}
