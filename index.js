'use strict'

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target
          element.classList.remove('hidden')
          element.classList.add('animate-offer-logo')
          observer.unobserve(element)
        }
      })
    }
    const offerLogo = document.getElementById('offer-logo')
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.9, // Adjust this value based on when you want the animation to start
    })

    observer.observe(offerLogo)
  }, 500)

  setTimeout(() => {
    const images = document.querySelectorAll('.slide-in-right, .slide-in-left')

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target
          element.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.9,
    })

    images.forEach((image) => {
      observer.observe(image)
    })
  }, 500)
})
