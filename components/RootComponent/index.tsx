import React, { PropsWithChildren, forwardRef, Ref } from 'react'
import styles from './styles'

type Props = {
  addStyle?: string
}

const RootComponent = forwardRef(
  ({ addStyle, children }: PropsWithChildren<Props>, ref: Ref<HTMLDivElement>) => {
    return (
      <div 
        className={`${styles.root} ${addStyle}`}
        ref={ref}
      >
        { children }
      </div>
    )
  }
)

export default RootComponent