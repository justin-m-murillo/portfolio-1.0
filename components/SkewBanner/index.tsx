import React from 'react'
import styles from './styles'

type Props = {
  color?: string,
  skew?: string,
}

const SkewBanner = ({ color, skew }: Props) => {
  return (
    <div className={`${styles.banner} ${color} ${skew}`} />
  )
}

export default SkewBanner