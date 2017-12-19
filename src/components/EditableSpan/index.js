import React from 'react'

import styles from './styles.module.css'

class EditableSpan extends React.Component {
  shouldComponentUpdate() { return false }

  render () {
    const { content, ...props } = this.props
    return (
      <span
        contentEditable
        {...props}
        className={styles.span}
        dangerouslySetInnerHTML={{ __html: content }}
        />
    )
  }
}

export default EditableSpan
