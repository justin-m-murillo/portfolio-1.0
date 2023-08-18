import React from 'react'
import { motion } from 'framer-motion'

import RootComponent from '../RootComponent'
import SectionTitle from '../SectionTitle'

import aboutimg from '../../public/aboutimg.jpg'
import styles from './styles'

type Props = {}

const MotionRootComponent = motion(RootComponent)

const About = (props: Props) => {
  return (
    <MotionRootComponent
      rootStyle={styles.root}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <SectionTitle title='About' />

      <motion.img 
        initial={{
          x:-200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src={aboutimg.src}
        className={styles.pic}
      />

      <div className={styles.bioContainer}>
        <h4 className={styles.bioHeading}>
          A little about <span className={styles.dec1}>me</span>
        </h4>
        <p className={styles.bioText}>
          I'm Justin, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Eleifend mi in nulla posuere sollicitudin. Congue eu consequat ac felis donec et odio. At in tellus integer feugiat scelerisque varius morbi enim. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Egestas integer eget aliquet nibh praesent. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Platea dictumst vestibulum rhoncus est.
        </p>
      </div>
    </MotionRootComponent>
  )
}

export default About