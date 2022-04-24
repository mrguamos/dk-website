import App from './App.vue'
import { ViteSSG } from 'vite-ssg/single-page'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'vue3-carousel/dist/carousel.css'

library.add(faBars, faExternalLinkAlt)
declare const window: any

function gtag(...args: any[]) {
  window.dataLayer.push(args)
}

export const createApp = ViteSSG(
  App,

  ({ app, isClient }) => {
    app.component('FontAwesomeIcon', FontAwesomeIcon)
    if (isClient) {
      window.dataLayer = window.dataLayer || []

      gtag('js', new Date())

      gtag('config', 'G-9JVRHW9TRZ')
      AOS.init({
        debounceDelay: 500,
        disable: window.innerHeight < 700,
      })
    }
  }
)
