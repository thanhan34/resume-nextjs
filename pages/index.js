import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
// import ParticlesBackground from '../components/ParticleBackground'

export default function Home() {
  return (
    <div className="bg-gray-600">
      <Head>
        <title>An Doan | Fullstack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <About />
      </main>

    </div>
  )
}
