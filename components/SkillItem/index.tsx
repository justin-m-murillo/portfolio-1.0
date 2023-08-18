import React from 'react'
import { motion } from 'framer-motion'
import { StaticImageData } from 'next/image'

type Props = {
  directionLeft?: boolean,
  icon: StaticImageData,
  itemStyle?: string,
}

const SkillItem = ({ directionLeft, icon, itemStyle }: Props) => {
  return (
    <motion.img
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      whileInView={{ 
        x: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={itemStyle}
      src={icon.src}
    />
  )
}

export default SkillItem