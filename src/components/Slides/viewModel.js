import * as mobx from 'mobx'

import React101 from '../../components/React101'
import MobX101 from '../../components/MobX101'
import ArchitectureGoals from '../../components/ArchitectureGoals'
import MvvmOverview from '../../components/MvvmOverview'
import MvvmModel from '../../components/MvvmModel'
import MvvmViewModel from '../../components/MvvmViewModel'
import MvvmView from '../../components/MvvmView'
import MvvmViewViewModelPairs from '../../components/MvvmViewViewModelPairs'
import References from '../../components/References'
import mkSlides from '../../models/Slides'
import slides from '../../data/slides.json'

const slidesModel = mkSlides()
window.slidesModel = slidesModel

slidesModel.loadComponents({
  React101,
  MobX101,
  ArchitectureGoals,
  MvvmOverview,
  MvvmModel,
  MvvmViewModel,
  MvvmView,
  MvvmViewViewModelPairs,
  References,
})

slidesModel.loadSlides(slides)

const mkViewModel = () => {
  const vm = mobx.observable({
    component: mobx.computed(() =>
      slidesModel.currentSlide.component
    ),

    handleClick: () => {
      slidesModel.nextSlide()
    },
  })

  return vm
}

export default mkViewModel
