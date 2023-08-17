import React from 'react'
import Image from 'next/image'

import facepic from '../../public/portraitimg.jpg'

type Props = {}

const FacePortrait = (props: Props) => {
  return (
    <div className='relative mx-auto'>
      <Image 
        src={facepic}
        width={128}
        height={128}
        objectFit='cover'
        alt="A portrait image of Justin"
        className='rounded-full'
    />
    </div>
  )
}

export default FacePortrait