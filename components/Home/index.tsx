import React from 'react'
import Head from 'next/head'
import Header from '../Header'
import Intro from '../Intro'
import About from '../About'
//import WorkExperience from '../WorkExperience'
import Skills from '../Skills'
import Projects from '../Projects'

import styles from './styles'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className={styles.root}>
      <Head>
        <title>Justin's Portfolio</title>
      </Head>

      {/* Header */}
      <Header />
      
      {/* Hero */}
      <section id='intro' className='snap-start'>
        <Intro />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      {/* <section id='workexperience' className='snap-center'>
        <WorkExperience />
      </section> */}

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Contact Me */}
    </div>
  )
}

export default Home