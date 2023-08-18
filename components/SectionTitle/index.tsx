import React from 'react'

import styles from './styles'

type Props = {
  title: string,
  subtitle?: string,
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <>
      <h1 className={styles.title}>
        {title}
      </h1>
      {subtitle &&
        <h2 className={styles.subtitle}>
          {subtitle}
        </h2>
      }
    </>
  )
}

export default SectionTitle