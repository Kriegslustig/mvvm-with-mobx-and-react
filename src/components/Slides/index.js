import React from 'react'

import Slide from '../../components/Slide'
import bindViewModel from '../../utils/bindViewModel'
import mkViewModel from './viewModel'
import styles from './styles.module.css'

const Slides = ({ viewModel }) =>
  <div
    className={styles.container}
    onClick={viewModel.handleClick}
    >
    <Slide
      content={<viewModel.content/>}
      title={viewModel.title}
      />
    <div
      className={styles.next}
      onClick={viewModel.handleClickNext}
      />
    <div
      className={styles.previous}
      onClick={viewModel.handleClickPrevious}
      />
  </div>

export default bindViewModel(mkViewModel, Slides)
