import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

export default function Projects() {
  const { t, i18n } = useTranslation('common')
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState('bachelor') // Tab attivo

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Aggiungi header per ottenere i topics
        const response = await fetch('https://api.github.com/users/alessandrogrotti/repos?sort=updated&per_page=100', {
          headers: {
            'Accept': 'application/vnd.github.mercy-preview+json' // Necessario per topics
          }
        })
        if (!response.ok) throw new Error('Failed to fetch repositories')
        
        const data = await response.json()
        
        console.log('Sample repo with topics:', data[0]) // Debug: verifica topics
        
        // Filtra e mappa i repository
        const filteredRepos = data
          .filter(repo => !repo.fork && !repo.archived) // Escludi fork e archivi
          .map(repo => {
            const category = categorizeRepo(repo)
            console.log(`${repo.name}: topics=${repo.topics}, category=${category}`) // Debug
            return {
              title: repo.name,
              desc: repo.description || 'No description available',
              repo: repo.html_url,
              stars: repo.stargazers_count,
              language: repo.language,
              updated: new Date(repo.updated_at),
              topics: repo.topics || [],
              type: category
            }
          })
          .sort((a, b) => b.updated - a.updated) // Ordina per più recenti
        
        setRepos(filteredRepos)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])
  // Funzione per categorizzare i repository automaticamente
  const categorizeRepo = (repo) => {
    const topics = (repo.topics || []).map(t => t.toLowerCase())

    // Controlla topic esatti (priorità massima)
    if (topics.includes('hidden')) return 'hidden'
    if (topics.includes('master')) return 'master'
    if (topics.includes('bachelor')) return 'bachelor'
    if (topics.includes('personal')) return 'personal'

    // Fallback: keywords nel nome e descrizione
    const name = repo.name.toLowerCase()
    const desc = (repo.description || '').toLowerCase()

    // Hidden keywords
    if (name.includes('hidden') || desc.includes('hidden')) return 'hidden'

    // Master keywords
    const masterKeywords = ['magistrale', 'master', 'msc', 'digital-transformation', 'dtm']
    if (masterKeywords.some(kw => name.includes(kw) || desc.includes(kw))) return 'master'

    // Bachelor keywords
    const bachelorKeywords = ['triennale', 'bachelor', 'bsc', 'laurea-triennale']
    if (bachelorKeywords.some(kw => name.includes(kw) || desc.includes(kw))) return 'bachelor'

    // Default: personal
    return 'personal'
  }

  const bachelorProjects = repos.filter(r => r.type === 'bachelor')
  const masterProjects = repos.filter(r => r.type === 'master')
  const personalProjects = repos.filter(r => r.type === 'personal')
  // hidden projects are filtered out, not displayed

  const tabs = [
    { id: 'bachelor', label: t('projects.bachelor_projects'), count: bachelorProjects.length },
    { id: 'master', label: t('projects.master_projects'), count: masterProjects.length },
    { id: 'personal', label: t('projects.personal_projects'), count: personalProjects.length },
  ]

  const getCurrentProjects = () => {
    switch (activeTab) {
      case 'bachelor': return bachelorProjects
      case 'master': return masterProjects
      case 'personal': return personalProjects
      default: return []
    }
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>Projects — Alessandro Grotti</title>
        <meta name="description" content="Academic and personal projects by Alessandro Grotti" />
      </Head>

      <Navbar />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-black">
              {t('sections.projects')}
            </h1>
            <p className="text-lg text-gray-500 mb-12 max-w-3xl font-light">
              {t('projects.description')}
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-4 font-light tracking-wide transition-all duration-300 border-b-2 ${
                    activeTab === tab.id
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <span className="text-sm">{tab.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    activeTab === tab.id
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {loading && (
              <div className="flex items-center gap-3 text-gray-400 mb-8">
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="font-light text-sm">{t('projects.loading')}</span>
              </div>
            )}
            {error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                Error loading repositories: {error}
              </div>
            )}
          </motion.div>

          {!loading && !error && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {getCurrentProjects().length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-400 text-lg font-light">{t('projects.no_projects')}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getCurrentProjects().map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
