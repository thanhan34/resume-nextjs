import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Resume from '../components/Resume'
import Skills from '../components/Skills'



export default function Home() {
  return (

    <div className="bg-gray-900 ">
      <Head>
        <title>An Doan | Fullstack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <About />
        <Resume />
        <Education />
        <Skills />
        <Contact />
      </main>

    </div>

  )
}
