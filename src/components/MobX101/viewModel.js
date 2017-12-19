import * as mobx from 'mobx'

const mkViewModel = () => {
  const vm = mobx.observable({
    net: 100,
    handleNet: mobx.action((e) => {
      vm.net = e.target.textContent
    }),

    vat: 0.19,
    handleVat: mobx.action((e) => {
      vm.vat = e.target.textContent
    }),

    gross: mobx.computed(() =>
      vm.net * (vm.vat + 1)
    ),
  })

  return vm
}

export default mkViewModel
