import * as mobx from 'mobx'

const mkViewModel = () => mobx.observable({
  links: mobx.observable.ref([
    ['React', 'http://github.com/facebook/react/'],
    ['MobX', 'http://mobx.js.org/'],
    [
      'Martin Fowler on the Presentation Model pattern (aka. MVVM)',
      'https://martinfowler.com/eaaDev/PresentationModel.html'
    ],
  ])
})

export default mkViewModel
