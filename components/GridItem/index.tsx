import React, { ReactNode } from 'react'

type Props = {
  gridItemStyle?: string,
  children: ReactNode
}

const GridItem = ({ gridItemStyle, children }: Props) => {
  return (
    <div className={gridItemStyle}>
      {children}
    </div>
  )
}

export default GridItem