import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import styles from './styles'

type Props = {
  words: string[]
}

const Typewriter = ({ words }: Props) => {
  const [text, count] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <h1 className={styles.typeWriterHeading}>
      <span className={styles.typeWriterText}>{text}</span>
      <Cursor cursorColor='#f7abba' />
    </h1>
  )
}

export default Typewriter