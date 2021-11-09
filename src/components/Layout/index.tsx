import classnames from 'classnames'
import {FC, useEffect, useState} from 'react'
import {LayoutProps} from '../../types/layout'

import styles from './styles.module.scss'

export const Layout: FC<LayoutProps> = ({layout}) => {
  const [gridRows, setGridRows] = useState(0)

  useEffect(() => {
    let count = 0
    layout.forEach(size => {
      if (size === 'XL') count += 2
      else if (size === 'L') count++
    })
    count += Math.ceil(layout.filter(size => size === 'SM').length / 2)
    setGridRows(Math.max(count, 4))
  }, [layout])

  return (
    <main
      className={styles.layout}
      style={{gridTemplateRows: `repeat(${gridRows}, 1fr)`}}
    >
      {layout.map((size, i) => (
        <section
          key={i}
          className={classnames(styles.layout__box, styles[`layout__${size}`])}
        >
          Slot-{i + 1}
        </section>
      ))}
    </main>
  )
}
