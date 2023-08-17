import React from 'react'
import Link from 'next/link'

import RootComponent from '../RootComponent'
import BackgroundCircleSet from '../BackgroundCircleSet'
import FacePortrait from '../FacePortrait'


import styles from './styles'
import Typewriter from '../Typewriter'


type Props = {}

const Intro = (props: Props) => {
  const words = [
    'Hi!', 
    'My name is Justin Murillo',
    'I am a developer',
    'and a designer',
  ]

  const buttons = [
    { id: '#about', tag: 'About'},
    { id: '#experience', tag: 'Experience'},
    { id: '#skills', tag: 'Skills'},
    { id: '#Project', tag: 'Projects'},
  ]

  return (
    <RootComponent addStyle={styles.root}>
      <BackgroundCircleSet />
      <FacePortrait />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Frontend Developer
        </h2>
        <Typewriter words={words} />

        <div className='pt-5'>
          {buttons.map(btn => 
            <Link href={btn.id}>
              <button className='introBtn'>{btn.tag}</button>
            </Link>
          )}
        </div>
      </div>
    </RootComponent>
  )
}

export default Intro