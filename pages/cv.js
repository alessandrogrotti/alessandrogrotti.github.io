import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CV() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>CV — Alessandro Grotti</title>
        <meta name="description" content="CV of Alessandro Grotti" />
        <meta property="og:title" content="Alessandro Grotti — CV" />
      </Head>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Curriculum Vitae</h1>
        <p className="mb-4">You can view or download my CV below.</p>
        <div className="border rounded overflow-hidden">
          <iframe src="/CV.pdf" className="w-full h-[600px]" title="CV PDF" />
        </div>
        <div className="mt-4">
          <a href="/CV.pdf" download className="px-4 py-2 bg-blue-600 text-white rounded">Download CV</a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
