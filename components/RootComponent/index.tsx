import React, { forwardRef, Ref, ReactNode } from 'react'
import styles from './styles'

type Props = {
  rootStyle?: string,
  children: ReactNode
}

const RootComponent = forwardRef(
  ({ rootStyle, children }: Props, ref: Ref<HTMLDivElement>) => {
    return (
      <div 
        className={`${styles.root} ${rootStyle}`}
        ref={ref}
      >
        { children }
      </div>
    )
  }
)

export default RootComponent