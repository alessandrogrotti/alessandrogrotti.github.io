import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LocaleSwitcher from '../components/LocaleSwitcher'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Alessandro Grotti — Home</title>
        <meta name="description" content="Personal homepage of Alessandro Grotti" />
        <meta property="og:title" content="Alessandro Grotti" />
        <meta property="og:description" content="Personal homepage and portfolio" />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">Ciao — I'm Alessandro</h1>
            <p className="mt-3 text-lg text-gray-600">I'm a computer science graduate. I build software and research projects.</p>
            <div className="mt-4 flex gap-3">
              <Link href="/projects"><a className="px-4 py-2 bg-blue-600 text-white rounded">Projects</a></Link>
              <Link href="/cv"><a className="px-4 py-2 border rounded">Download CV</a></Link>
            </div>
          </div>
          <LocaleSwitcher />
        </div>

        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded shadow-sm">
            <h3 className="font-semibold">Education</h3>
            <p className="mt-2 text-sm text-gray-600">BSc in Computer Science — University</p>
          </div>
          <div className="p-6 border rounded shadow-sm">
            <h3 className="font-semibold">Contact</h3>
            <p className="mt-2 text-sm text-gray-600">Email: <a href="mailto:your.email@example.com" className="text-blue-600">your.email@example.com</a></p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
