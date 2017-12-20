import React from 'react'

import bindViewModel from '../../utils/bindViewModel'
import mkViewModel from './viewModel'
import styles from './styles.module.css'

const Slides = ({ viewModel }) =>
  <div
    className={styles.container}
    onClick={viewModel.handleClick}
    >
    <viewModel.component/>
  </div>

export default bindViewModel(mkViewModel, Slides)
