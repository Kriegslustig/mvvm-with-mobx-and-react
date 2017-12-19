import React from 'react'

import styles from './styles.module.css'

const Columns = ({ children, ...props }) => (
  <div className={styles.container} {...props}>
    {children}
  </div>
)

export default Columns
