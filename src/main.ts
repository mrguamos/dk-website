import App from './App.vue'
import { ViteSSG } from 'vite-ssg/single-page'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'

library.add(faBars, faExternalLinkAlt)

export const createApp = ViteSSG(
  App,

  ({ app, isClient }) => {
    app.component('FontAwesomeIcon', FontAwesomeIcon)
    if (isClient) {
      AOS.init({
        debounceDelay: 500,
        mirror: true,
      })
    }
  }
)