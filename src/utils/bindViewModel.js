import React from 'react'
import { observer } from 'mobx-react'

const bindViewModel = (mkViewModel, component) => {
  class BoundComponent extends React.Component {
    constructor(props, ctx) {
      super(props, ctx)
      this.viewModel = mkViewModel(props)
      this.component = observer(component)
    }

    render() {
      const { children } = this.props

      return React.createElement(
        this.component,
        { viewModel: this.viewModel },
        children,
      )
    }
  }

  return BoundComponent
}

export default bindViewModel
