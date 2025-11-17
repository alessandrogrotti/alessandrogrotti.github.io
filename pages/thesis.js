import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Thesis() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Thesis — Alessandro Grotti</title>
        <meta name="description" content="Bachelor thesis of Alessandro Grotti" />
        <meta property="og:title" content="Alessandro Grotti — Thesis" />
      </Head>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Bachelor Thesis</h1>
        <p className="mb-4">You can view or download my thesis below.</p>
        <div className="border rounded overflow-hidden">
          <iframe src="/Thesis.pdf" className="w-full h-[600px]" title="Thesis PDF" />
        </div>
        <div className="mt-4">
          <a href="/Thesis.pdf" download className="px-4 py-2 bg-blue-600 text-white rounded">Download Thesis</a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
