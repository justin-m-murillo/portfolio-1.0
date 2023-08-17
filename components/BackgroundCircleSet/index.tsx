import React from 'react'
import { motion } from 'framer-motion'

import BackgroundCircle from '../BackgroundCircle'

import styles from './styles'

type Props = {}

const BackgroundCircleSet = (props: Props) => {
  return (
    <motion.div 
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%']
      }}
      transition={{
        duration: 2.5,
      }}
      className={styles.backgroundCircles}
    >
      <BackgroundCircle height='h-[200px]' width='w-[200px]' color='border-[#001439]' isPing />
      <BackgroundCircle height='h-[300px]' width='w-[300px]' color='border-[#333333]' />
      <BackgroundCircle height='h-[500px]' width='w-[500px]' color='border-[#333333]' />
      <BackgroundCircle height='h-[650px]' width='w-[650px]' color='border-[#bdb246]' opacity='opacity-20' isPulse />
      <BackgroundCircle height='h-[800px]' width='w-[800px]' color='border-[#333333]' />
    </motion.div>
  )
}

export default BackgroundCircleSet