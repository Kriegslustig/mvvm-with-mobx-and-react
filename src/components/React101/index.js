import React, { Fragment } from 'react'

import Slide from '../Slide'
import EditableSpan from '../EditableSpan'
import bindViewModel from '../../utils/bindViewModel'
import reactTag from '../../utils/reactTag'
import mkViewModel from './viewModel'
import styles from './styles.module.css'

const slideDefinitionCode =
`const Slide = ({ title, content }) =>
  <section>
    <h2>{title}</h2>
    <main>{content}</main>
  </section>`

const slideRenderCode = (title, content) => reactTag`<Slide
  title='${title}'
  content='${content}'
  />`

const React101 = ({ viewModel }) =>
  <div className={styles.container}>
    <section className={styles.column}>
      <pre className={styles.row}>
        <code>
          {slideDefinitionCode}
        </code>
      </pre>
      <hr/>
      <pre className={styles.row}>
        <code>
          {slideRenderCode(
            (
              <EditableSpan
                content={viewModel.fakeSlideTitle}
                onInput={viewModel.handleInputTitle}
                />
            ),
            (
              <EditableSpan
                content={viewModel.fakeSlideContent}
                onInput={viewModel.handleInputContent}
                />
            )
          )}
        </code>
      </pre>
      <hr/>
      <button onClick={viewModel.handleRender}>Render!</button>
    </section>
    <section className={styles.column}>
      {viewModel.showFakeSlide && (
        <Slide
          title={viewModel.fakeSlideProps.title}
          content={viewModel.fakeSlideProps.content}
          />
      )}
    </section>
  </div>

export default bindViewModel(mkViewModel, React101)
