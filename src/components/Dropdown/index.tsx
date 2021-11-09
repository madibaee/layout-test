import React, {
  FC,
  useState,
  useRef,
  useEffect,
  cloneElement,
  ReactElement,
} from 'react'
import {DropdownToggle, isToggle, ToggleProps} from './Toggle'
import {DropdownMenu, isMenu, MenuProps} from './Menu'
import {DropdownItem} from './Item'
import styles from './styles.module.scss'

export const Dropdown: FC = ({children}) => {
  const innerRef = useRef<HTMLDivElement>(null)

  const [isOpen, toggle] = useState(false)

  const onClickToggle = () => {
    toggle!(!isOpen)
  }

  let toggleChild: ReactElement<ToggleProps> | null = null
  let menuChild: ReactElement<MenuProps> | null = null

  React.Children.forEach(children, child => {
    if (isToggle(child)) {
      toggleChild = cloneElement<ToggleProps>(child, {onClick: onClickToggle})
    } else if (isMenu(child)) {
      menuChild = cloneElement<MenuProps>(child, {show: isOpen, toggle})
    }
  })

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!innerRef.current?.contains(event.target as Node)) {
        toggle!(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div className={styles.dropdown} ref={innerRef}>
      {toggleChild}
      {menuChild}
    </div>
  )
}

export {DropdownToggle, DropdownMenu, DropdownItem}
