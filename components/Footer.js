export default function Footer(){
  return (
    <footer className="w-full border-t bg-white">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} Alessandro Grotti — Built with Next.js · TailwindCSS
      </div>
    </footer>
  )
}
