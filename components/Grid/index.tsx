import React, { ReactNode } from 'react'

type GridProps = {
  gridStyle?: string,
  children: ReactNode
}

const Grid = ({ gridStyle, children }: GridProps) => {
  return (
    <div className={gridStyle}>
      { children }
    </div>
  )
}

export default Grid