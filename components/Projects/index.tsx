import React from 'react'

import styles from './styles'

import RootComponent from '../RootComponent'
import SectionTitle from '../SectionTitle'
import SkewBanner from '../SkewBanner'

import sanityIcon from '../../public/sanity-icon-180x180.png'

type Props = {}

const Projects = (props: Props) => {
  const projects = [1,2,3,4,5]
  return (
    <RootComponent rootStyle={styles.root}>
      <SectionTitle title='Projects' />

      <div className={styles.projectContainer}>
        {/* project items */}
        {projects.map(project => (
          <div className='w-screen h-screen flex flex-col space-y-5 items-center justify-center p-20 md:p-44 flex-shrink-0 snap-center'>
            <img
              src={sanityIcon.src}
              alt='testing'
            />
            <div>
              <h4 className={styles.projectTitle}>
                <span className={styles.titlePrefix}>Project {project}:</span> TestProject 
              </h4>
            </div>
          </div>
        ))}
      </div>
      
      <SkewBanner color='bg-[#bdb246]/10' skew='-skew-y-12' />
    </RootComponent>
  )
}

export default Projects