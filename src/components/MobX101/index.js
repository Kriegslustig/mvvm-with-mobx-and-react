import React from 'react'

import Columns from '../Columns'
import EditableSpan from '../EditableSpan'
import bindViewModel from '../../utils/bindViewModel'
import reactTag from '../../utils/reactTag'
import mkViewModel from './viewModel'

const viewModelCode = (net, vat) =>
reactTag`const price = mobx.observable({
  net: ${net},
  vat: ${vat},
  gross: mobx.computed(() =>
    price.net * (price.vat + 1)
  ),
})`

const viewModelResult = (net, vat, total) =>
`{
  net: ${net},
  vat: ${vat},
  total: ${total},
}`

const MobX101 = ({ viewModel }) =>
  <Columns>
    <section>
      <pre>
        <code>
          {viewModelCode(
            (<EditableSpan
              onInput={viewModel.handleNet}
              content={viewModel.net}
              />),
            (<EditableSpan
              onInput={viewModel.handleVat}
              content={viewModel.vat}
              />),
          )}
        </code>
      </pre>
    </section>
    <section>
      <pre>
        <code>
          {viewModelResult(viewModel.net, viewModel.vat, viewModel.gross)}
        </code>
      </pre>
    </section>
  </Columns>

export default bindViewModel(mkViewModel, MobX101)
