import React from 'react'
import styles from './styles'

import { motion } from 'framer-motion'

import { SocialIcon } from 'react-social-icons'

type Props = {}

type IconProps = {
  url: string
}

const Icon = ({ url }: IconProps) => {
  return (
    <SocialIcon 
      url={url}
      fgColor={styles.iconFgColor}
      bgColor={styles.iconBgColor}
    />
  )
}

const Header = (props: Props) => {
  return (
    <header className={styles.iconHeaderContainer}>
      <motion.div 
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1
        }}
        className={styles.socialIconsContainer}
      >
        {/* Social Icons */}
        <Icon url='https://github.com/justin-m-murillo' />
        <Icon url='https://github.com/justin-m-murillo' />
      </motion.div>

      <motion.div 
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1
        }}
        className={styles.emailContainer}
      >
        {/* Get In Touch Icon */}
        <SocialIcon 
          className='cursor-pointer'
          network='email'
          fgColor={styles.iconFgColor}
          bgColor={styles.iconBgColor}
        />
        <p className={styles.contactMeText}>Contact Me</p>
      </motion.div>
    </header>
  )
}

export default Header