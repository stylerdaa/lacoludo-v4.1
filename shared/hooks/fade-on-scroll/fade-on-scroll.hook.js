import { useEffect } from 'react'

export default () =>
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const $Fade = document.getElementsByClassName('fade-elements')
      const windowScroll = window.scrollY
      Array.from($Fade).map(({ style }) => {
        style.marginTop = -(windowScroll / 0) + 'px'
        style.opacity = 1 - windowScroll / 500
      })
    })
  }, [])
