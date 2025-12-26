import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

export default function ProjectCard({ project }) {
  const { t } = useTranslation('common')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  const typeColors = {
    bachelor: 'bg-black text-white',
    master: 'bg-gray-800 text-white',
    personal: 'bg-gray-600 text-white'
  }

  const languageColors = {
    JavaScript: 'bg-gray-100 text-gray-800',
    TypeScript: 'bg-gray-200 text-gray-900',
    Python: 'bg-gray-100 text-gray-800',
    Java: 'bg-gray-200 text-gray-900',
    HTML: 'bg-gray-100 text-gray-800',
    CSS: 'bg-gray-200 text-gray-900',
    PHP: 'bg-gray-100 text-gray-800',
    Kotlin: 'bg-gray-200 text-gray-900'
  }

  const isComingSoon = project.status === 'coming' || project.repo === '#'
  const tags = project.tags || project.topics || []

  // Formatta il titolo del repository (rimuove trattini, capitalizza)
  const formatTitle = (title) => {
    return title
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const displayTitle = project.title.includes('-') && !project.title.includes(' ') 
    ? formatTitle(project.title) 
    : project.title

  if (!mounted) {
    return (
      <article className="group h-full flex flex-col p-6 bg-white border-2 border-gray-200 rounded-xl">
        <div className="h-32 bg-gray-100 animate-pulse rounded mb-4"></div>
        <div className="h-4 bg-gray-100 animate-pulse rounded mb-2"></div>
        <div className="h-4 bg-gray-100 animate-pulse rounded w-3/4"></div>
      </article>
    )
  }

  return (
    <article className="group h-full flex flex-col p-6 bg-white border border-gray-200 hover:border-black transition-all duration-500 hover:shadow-2xl">
      <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
        <span className={`px-3 py-1 text-xs font-light tracking-wider uppercase ${typeColors[project.type] || 'bg-gray-500 text-white'}`}>
          {project.type === 'bachelor' 
            ? t('sections.bachelor').split(' — ')[0] 
            : project.type === 'master' 
            ? t('sections.master').split(' — ')[0]
            : 'Personal'}
        </span>
        <div className="flex items-center gap-2">
          {project.language && (
            <span className={`px-2 py-1 text-xs font-light ${languageColors[project.language] || 'bg-gray-100 text-gray-700'}`}>
              {project.language}
            </span>
          )}
          {project.stars > 0 && (
            <span className="flex items-center gap-1 text-xs text-gray-400 font-light">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {project.stars}
            </span>
          )}
        </div>
      </div>

      <h3 className="font-light text-xl mb-3 text-black group-hover:text-gray-600 transition-colors tracking-tight">
        {displayTitle}
      </h3>
      
      <p className="text-sm text-gray-500 mb-4 line-clamp-3 flex-grow font-light leading-relaxed">
        {project.desc}
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 5).map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-light border border-gray-200">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-4 border-t border-gray-100">
        {isComingSoon ? (
          <span className="text-sm text-gray-300 italic font-light">
            Repository coming soon
          </span>
        ) : (
          <a 
            href={project.repo} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 text-black hover:text-gray-500 font-light text-sm transition-all group-hover:gap-3"
          >
            <span>{t('projects.view_repo')}</span>
            <span>→</span>
          </a>
        )}
      </div>
    </article>
  )
}
