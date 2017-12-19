import React from 'react'

import mkViewModel from './viewModel'
import bindViewModel from '../../utils/bindViewModel'

const References = ({ viewModel }) =>
  <ul>
    {viewModel.links.map(([ text, href ], i) =>
      <li key={i}>
        <a href={href}>{text}</a>
      </li>
    )}
  </ul>

export default bindViewModel(mkViewModel, References)
