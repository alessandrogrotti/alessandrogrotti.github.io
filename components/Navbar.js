import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-lg font-bold">Alessandro</div>
        <nav className="space-x-4">
          <Link href="/"><a className="text-gray-700">Home</a></Link>
          <Link href="/projects"><a className="text-gray-700">Projects</a></Link>
          <Link href="/cv"><a className="text-gray-700">CV</a></Link>
          <Link href="/thesis"><a className="text-gray-700">Thesis</a></Link>
          <Link href="/contact"><a className="text-gray-700">Contact</a></Link>
        </nav>
      </div>
    </header>
  )
}
