import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Contact — Alessandro Grotti</title>
      </Head>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <p className="mb-4">Email: <a href="mailto:your.email@example.com" className="text-blue-600">your.email@example.com</a></p>
        <p className="mb-4">LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-600">yourprofile</a></p>
      </main>

      <Footer />
    </div>
  )
}
