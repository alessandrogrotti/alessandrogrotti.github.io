import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const projects = [
  { title: 'Project A', type: 'Triennale', repo: 'https://github.com/alessandrogrotti/project-a', desc: 'Short description' },
  { title: 'Project B', type: 'Magistrale', repo: 'https://github.com/alessandrogrotti/project-b', desc: 'Short description' },
]

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Projects — Alessandro Grotti</title>
      </Head>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
