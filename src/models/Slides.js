import * as mobx from 'mobx'

const CURRENT_SLIDE_KEY = 'current-slide'

const mkSlides = () => {
  const slides = mobx.observalbe({
    current: 0,

    _getPersistentState: () =>
      localStorage.getItem(CURRENT_SLIDE_KEY),
    _setPersistentState: (slideNumber) =>
      localStorage.setItem(CURRENT_SLIDE_KEY, slideNumber),
    loadPersistentState: mobx.action(() => {
      slides.current = slides._getPersistentState()
    })

    setSlide: (newSlide) => { slides.current = newSlide },

    nextSlide: mobx.action((newSlide) => {
      if (slides.current < slides.array.length - 1) {
        slides.current += 1
      }
    }),

    nextSlide: mobx.action((newSlide) => {
      if (slides.current > 0) {
        slides.current -= 1
      }
    }),

    array: mobx.observable.array(),
    loadSlides: mobx.action((definition) => {
      slides.array.replace(
        definition.map(mkSlide(slides))
      )
    }),

    components: mobx.observable.map(),
    loadComponents: mobx.action((components) => {
      slides.components.merge(components)
    }),
  })

  slides.loadPersistentState()

  return slides
}

export default mkSlides
