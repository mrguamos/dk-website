const offsets: Array<number> = []
let touchStartY = 0
let activeSection = 0
let inMove = false
export function useScrollHandler() {
  const mountHandler = () => {
    calculateSectionOffsets()
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('wheel', handleMouseWheel, { passive: false })
    window.addEventListener('touchstart', touchStart, { passive: false }) // mobile devices
    window.addEventListener('touchmove', touchMove, { passive: false }) // mobile devices
  }

  const unmountHandler = () => {
    window.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('wheel', handleMouseWheel)
    window.removeEventListener('touchstart', touchStart) // mobile devices
    window.removeEventListener('touchmove', touchMove) // mobile devices
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code == 'ArrowDown' && !inMove) {
      event.preventDefault()
      moveUp()
    } else if (event.code == 'ArrowUp' && !inMove) {
      event.preventDefault()
      moveDown()
    }
  }

  const handleMouseWheel = (event: WheelEvent) => {
    if (event.deltaY > 1 && !inMove) {
      moveUp()
    } else if (event.deltaY < 1 && !inMove) {
      moveDown()
    }
    event.preventDefault()
    return false
  }

  const touchStart = (event: TouchEvent) => {
    touchStartY = event.touches[0].clientY
  }

  const touchMove = (event: TouchEvent) => {
    if (inMove) return false
    event.preventDefault()
    const currentY = event.touches[0].clientY

    if (touchStartY < currentY) {
      moveDown()
    } else {
      moveUp()
    }

    touchStartY = 0
    return false
  }

  const moveUp = () => {
    inMove = true
    if (activeSection < offsets.length - 1) activeSection++
    scrollToSection(activeSection, true)
  }

  const moveDown = () => {
    inMove = true
    if (activeSection > 0) activeSection--
    scrollToSection(activeSection, true)
  }

  const scrollToSection = (id: number, force = false) => {
    if (inMove && !force) return false
    activeSection = id
    inMove = true
    const el = document.querySelectorAll('section')[id]
    el.scrollIntoView({ behavior: 'smooth' })
    window.location.hash = el.id
    setTimeout(() => {
      inMove = false
    }, 300)
  }

  const calculateSectionOffsets = () => {
    const hash = window.location.hash
    const sections = document.getElementsByTagName('section')
    const length = sections.length
    for (let i = 0; i < length; i++) {
      const sectionOffset = sections[i].offsetTop
      offsets.push(sectionOffset)
      if ('#' + sections[i].id === hash) activeSection = i
    }
  }
  return { mountHandler, unmountHandler, scrollToSection }
}
