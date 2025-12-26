import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const router = useRouter()
  const { t } = useTranslation('common')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (path) => router.pathname === path

  if (!mounted) {
    return (
      <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <Link href="/" className="text-xl font-light tracking-tight text-black">
            Alessandro Grotti
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            <div className="h-10 w-64 bg-gray-50 animate-pulse"></div>
          </nav>
        </div>
      </header>
    )
  }

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/" className="text-xl font-light tracking-tight text-black hover:text-gray-600 transition-colors">
          Alessandro Grotti
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`font-light tracking-wide transition-all ${
              isActive('/') 
                ? 'text-black border-b-2 border-black pb-1' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {t('nav.home')}
          </Link>
          <Link 
            href="/projects" 
            className={`font-light tracking-wide transition-all ${
              isActive('/projects') 
                ? 'text-black border-b-2 border-black pb-1' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {t('nav.projects')}
          </Link>
          <Link 
            href="/cv" 
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              isActive('/cv') 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {t('nav.cv')}
          </Link>
          <Link 
            href="/thesis" 
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              isActive('/thesis') 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {t('nav.thesis')}
          </Link>
          <Link 
            href="/contact" 
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              isActive('/contact') 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {t('nav.contact')}
          </Link>
        </nav>
      </div>
    </header>
  )
}
