import React from 'react'
import { motion } from 'framer-motion'

import styles from './styles'

import RootComponent from '../RootComponent'
import Grid from '../Grid'
import SectionTitle from '../SectionTitle'
import SkillItem from '../SkillItem'

import GridItem from '../GridItem'
import useSkills from '../../hooks/useSkills'

type Props = {}

const MotionRootComponent = motion(RootComponent)

const Skills = (props: Props) => {
  const skills = useSkills();

  return (
    <MotionRootComponent
      rootStyle={styles.root}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <SectionTitle 
        title='Skills' 
        subtitle='Hover over a skill for current proficiency'
      />
      <Grid gridStyle={styles.gridStyle}>
        {skills.map(elem => (
          <GridItem key={elem.key} gridItemStyle={styles.gridItemStyle}>
            <SkillItem 
              directionLeft={elem.directionLeft}
              icon={elem.icon} 
              itemStyle={styles.skillItem}
            />
            <div className={styles.profContainer}>
              <div className={styles.profWrapper}>
                <p className={styles.proficiency}>100%</p>
              </div>
            </div>
          </GridItem>
        ))}
      </Grid>
    </MotionRootComponent>
  )
}

export default Skills