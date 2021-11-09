import {FC, ReactElement, ReactNode} from 'react'

import styles from './styles.module.scss'

export type ToggleProps = {onClick?: () => void}

export const DropdownToggle: FC<ToggleProps> = ({children, onClick}) => {
  return (
    <button type='button' className={styles.toggle} onClick={onClick}>
      {children}
    </button>
  )
}

export function isToggle(component: ReactNode): component is ReactElement {
  return (
    typeof component === 'object' &&
    (component as ReactElement)?.type === DropdownToggle
  )
}
