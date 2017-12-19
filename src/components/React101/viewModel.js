import * as mobx from 'mobx'

const mkViewModel = () => {
  const vm = mobx.observable({
    fakeSlideTitle: 'My Slide',
    fakeSlideContent: 'Boring blah.',

    fakeSlideProps: mobx.observable.ref(null),

    showFakeSlide: mobx.computed(() => !!vm.fakeSlideProps),

    handleInputTitle: mobx.action((e) => {
      vm.fakeSlideTitle = e.target.textContent
    }),

    handleInputContent: mobx.action((e) => {
      vm.fakeSlideContent = e.target.textContent
    }),

    handleRender: mobx.action(() => {
      vm.fakeSlideProps = {
        title: vm.fakeSlideTitle,
        content: vm.fakeSlideContent,
      }
    }),
  })

  return vm
}

export default mkViewModel
