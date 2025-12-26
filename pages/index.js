import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LocaleSwitcher from '../components/LocaleSwitcher'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

export default function Home() {
  const { t } = useTranslation('common')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = {
    frontend: ['React', 'TypeScript', 'Tailwind', 'shadcn/UI', 'Next.js'],
    backend: ['Node.js', 'PHP', 'MySQL', 'MongoDB'],
    data: ['Python', 'Pandas', 'SAS', 'Excel'],
    tools: ['GitHub Actions', 'Docker', 'AWS S3', 'Odoo']
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>Alessandro Grotti — Portfolio</title>
        <meta name="description" content="Alessandro Grotti - Digital Transformation & Software Engineering" />
        <meta property="og:title" content="Alessandro Grotti" />
        <meta property="og:description" content="M.Sc. student in Digital Transformation Management" />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
          
          <div className="container mx-auto px-4 pt-20 pb-32 relative">
            <div className="flex items-center justify-end mb-6">
              <LocaleSwitcher />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-6xl md:text-7xl font-extralight mb-8 text-black tracking-tight">
                {t('hero.greeting')}
              </h1>
              
              <div className="space-y-4 mb-8 border-l-2 border-black pl-6">
                <p className="text-xl md:text-2xl text-gray-800 font-light">
                  {t('hero.title')}
                </p>
                <p className="text-lg text-gray-500 font-light">
                  {t('hero.subtitle')}
                </p>
              </div>

              <p className="text-lg text-gray-500 mb-12 max-w-3xl leading-relaxed font-light">
                {t('hero.description')}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/projects" 
                  className="px-8 py-4 bg-black text-white font-light tracking-wide hover:bg-gray-800 transition-all duration-300"
                >
                  {t('hero.cta_projects')}
                </Link>
                <Link 
                  href="/cv" 
                  className="px-8 py-4 border border-gray-300 text-gray-900 font-light tracking-wide hover:border-black transition-all duration-300"
                >
                  {t('hero.cta_cv')}
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-4 border border-gray-300 text-gray-900 font-light tracking-wide hover:border-black transition-all duration-300"
                >
                  {t('hero.cta_contact')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light mb-16 text-center tracking-tight">{t('sections.education')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="p-8 border border-gray-200 hover:border-black transition-all duration-500 hover:shadow-2xl">
                  <h3 className="text-2xl font-light mb-3 tracking-tight">{t('education.master_degree')}</h3>
                  <p className="text-gray-600 font-light mb-3">{t('education.master_title')}</p>
                  <p className="text-sm text-gray-400 font-light tracking-wide uppercase">{t('education.master_status')}</p>
                </div>

                <div className="p-8 border border-gray-200 hover:border-black transition-all duration-500 hover:shadow-2xl">
                  <h3 className="text-2xl font-light mb-3 tracking-tight">{t('education.bachelor_degree')}</h3>
                  <p className="text-gray-600 font-light mb-3">{t('education.bachelor_title')}</p>
                  <p className="text-sm text-black font-light tracking-wide uppercase">{t('education.bachelor_grade')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light mb-16 text-center tracking-tight">{t('sections.skills')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="p-6 bg-white border border-gray-200 hover:border-black transition-all duration-500">
                  <h3 className="font-light mb-4 text-black tracking-wide uppercase text-sm">{t('skills.frontend')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-light">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-white border border-gray-200 hover:border-black transition-all duration-500">
                  <h3 className="font-light mb-4 text-black tracking-wide uppercase text-sm">{t('skills.backend')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-light">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-white border border-gray-200 hover:border-black transition-all duration-500">
                  <h3 className="font-light mb-4 text-black tracking-wide uppercase text-sm">{t('skills.data')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.data.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-light">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-white border border-gray-200 hover:border-black transition-all duration-500">
                  <h3 className="font-light mb-4 text-black tracking-wide uppercase text-sm">{t('skills.tools')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-light">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-light mb-16 text-center tracking-tight">{t('sections.documents')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link 
                  href="/cv" 
                  className="p-8 border border-gray-200 hover:border-black hover:shadow-2xl transition-all duration-500 group"
                >
                  <h3 className="font-light text-xl mb-3 tracking-tight group-hover:text-gray-600 transition-colors">
                    {t('documents.cv_title')}
                  </h3>
                  <p className="text-sm text-gray-400 font-light">{t('documents.view_download')}</p>
                </Link>

                <Link 
                  href="/thesis" 
                  className="p-8 border border-gray-200 hover:border-black hover:shadow-2xl transition-all duration-500 group"
                >
                  <h3 className="font-light text-xl mb-3 tracking-tight group-hover:text-gray-600 transition-colors">
                    {t('documents.thesis_title')}
                  </h3>
                  <p className="text-sm text-gray-400 font-light">{t('documents.view_download')}</p>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
                {t('contact.title')}
              </h2>
              <p className="text-lg mb-12 text-gray-400 font-light max-w-2xl mx-auto">
                Interested in collaboration or have questions? Feel free to reach out!
              </p>
              <Link 
                href="/contact" 
                className="inline-block px-10 py-5 bg-white text-black font-light tracking-wide hover:bg-gray-200 transition-all duration-300"
              >
                {t('hero.cta_contact')}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
