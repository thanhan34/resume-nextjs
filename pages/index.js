import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
// import ParticlesBackground from '../components/ParticleBackground'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>An Doan | Fullstack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <ParticlesBackground /> */}
        <Header />
        <Hero />
      </main>

    </div>
  )
}
