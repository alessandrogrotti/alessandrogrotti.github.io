import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-lg font-bold">Alessandro</div>
        <nav className="space-x-4">
          <Link href="/" className="text-gray-700">Home</Link>
          <Link href="/projects" className="text-gray-700">Projects</Link>
          <Link href="/cv" className="text-gray-700">CV</Link>
          <Link href="/thesis" className="text-gray-700">Thesis</Link>
          <Link href="/contact" className="text-gray-700">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
