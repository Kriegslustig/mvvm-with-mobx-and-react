import * as mobx from 'mobx'

import mkSlide from './Slide'

const CURRENT_SLIDE_KEY = 'current-slide'

const mkSlides = () => {
  const slides = mobx.observable({
    current: 0,
    currentSlide: mobx.computed(() =>
      slides.array[slides.current]
    ),

    _getPersistentState: () =>
      localStorage.getItem(CURRENT_SLIDE_KEY),
    _setPersistentState: (slideNumber) =>
      localStorage.setItem(CURRENT_SLIDE_KEY, slideNumber),
    loadPersistentState: mobx.action(() => {
      slides.current = slides._getPersistentState() || 0
    }),

    setSlide: (newSlide) => { slides.current = newSlide },

    nextSlide: mobx.action((newSlide) => {
      if (slides.current < slides.array.length - 1) {
        slides.current += 1
      }
    }),

    previousSlide: mobx.action((newSlide) => {
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
