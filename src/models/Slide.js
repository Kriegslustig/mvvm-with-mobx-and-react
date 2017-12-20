import * as mobx from 'mobx'

const mkSlide = (slides) => ({ component, title }) => mobx.observable({
  title,
  component: mobx.computed(() =>
    slides.components.get(component)
  ),
})

export default mkSlide
