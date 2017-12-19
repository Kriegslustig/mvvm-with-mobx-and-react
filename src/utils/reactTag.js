import React, { Fragment } from 'react'

const reactTag = (stringFragments, ...reactElements) => {
  const children = stringFragments.reduce(
    (m, stringFragment, i) =>
      reactElements[i]
        ? m.concat([stringFragment, reactElements[i]])
        : m.concat([stringFragment]),
    []
  )
  return React.createElement(Fragment, {}, ...children)
}
export default reactTag
