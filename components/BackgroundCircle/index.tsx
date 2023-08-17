import React, { useEffect, useState } from 'react'

//import styles from './styles'

type Props = {
  height: string
  width: string
  color: string
  opacity?: string
  isPing?: boolean
  isPulse?: boolean
}

const BackgroundCircle = ({
  height,
  width, 
  color,
  opacity='opacity-100', 
  isPing,
  isPulse
}: Props) => {
  const [ classStr, setClassStr ] = useState('')

  return (
    <div className={
      `absolute border rounded-full mt-52
       ${color} ${opacity}
       ${height} ${width}
       ${isPing ? 'animate-ping' : ''}
       ${isPulse ? 'animate-pulse' : ''}`
    }/>
  )
}

export default BackgroundCircle