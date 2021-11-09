import {FC, MouseEvent, ReactElement, ReactNode} from 'react'

import styles from './styles.module.scss'

type ItemProps = {onClick?: (event: MouseEvent<HTMLButtonElement>) => void}

export const DropdownItem: FC<ItemProps> = ({children, onClick}) => {
  const onClickItem: ItemProps['onClick'] = event => {
    onClick?.(event)
  }

  return (
    <button type='button' onClick={onClickItem} className={styles.item}>
      {children}
    </button>
  )
}

export function isItem(component: ReactNode): component is ReactElement {
  return (
    typeof component === 'object' &&
    (component as ReactElement)?.type === DropdownItem
  )
}
