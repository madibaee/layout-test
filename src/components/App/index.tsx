import {FC, useState} from 'react'
import {LayoutSize} from '../../types/layout'

import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from '../Dropdown'
import {Layout} from '../Layout'
import styles from './styles.module.scss'

export const App: FC<{layouts: string[]}> = ({layouts}) => {
  const [layout, setLayout] = useState<LayoutSize[]>([])

  const onCLickLayout = (layout: string) => {
    const complexSizes = layout.split('/')
    const sizes: LayoutSize[][] = complexSizes.map(complexSize => {
      const result = /(\d)([A-Z]*)/.exec(complexSize)
      if (!result) return [complexSize]
      const [, count, size] = result
      return Array(Number(count)).fill(size)
    })

    setLayout(sizes.flat())
  }
  return (
    <div className={styles.app}>
      <div className={styles.app__header}>
        <Dropdown>
          <DropdownToggle>Select layout</DropdownToggle>
          <DropdownMenu>
            {layouts.map(layout => (
              <DropdownItem key={layout} onClick={() => onCLickLayout(layout)}>
                {layout}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <Layout layout={layout} />
    </div>
  )
}
