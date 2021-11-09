import {FC, ReactElement, ReactNode} from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

export type MenuProps = {show?: boolean; toggle?: (status: boolean) => void}

export const DropdownMenu: FC<MenuProps> = ({children, show, toggle}) => {
  const onClick = () => {
    toggle?.(!show)
  }

  return (
    <div
      className={classnames(styles.menu, {[styles['menu--show']]: show})}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export function isMenu(component: ReactNode): component is ReactElement {
  return (
    typeof component === 'object' &&
    (component as ReactElement)?.type === DropdownMenu
  )
}
