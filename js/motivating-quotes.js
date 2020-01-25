;(function () {
  const quotes = [
    'Opportunities don’t happen, you create them',
    'Failure is the condiment that gives success its flavor',
    'Innovation distinguishes between a leader and a follower',
    'Fall seven times and stand up eight',
    'Fortune favors the brave',
    'Success is the child of audacity',
    'By words the mind is winged',
    'Life is a succession of lessons which must be lived to be understood',
    'Every solution breeds new problems',
    'Clothes make the man. Naked people have little or no influence on society',
    'Recognition is the greatest motivator',
  ]

  const quoteEl = document.createElement('div')
  quoteEl.classList.add('quote')
  document.querySelector('.header').appendChild(quoteEl)

  changeQuote()
  setInterval(() => {
    changeQuote()
  }, 10000)

  function changeQuote() {
    const handler = () => {
      const showHandler = () => {
        quoteEl.classList.remove('fa-enter-active')
        quoteEl.removeEventListener('animationend', showHandler)
      }

      quoteEl.classList.remove('fa-leave-active')
      quoteEl.removeEventListener('animationend', handler)

      quoteEl.textContent = getRndQuote()
      quoteEl.classList.add('fa-enter')
      quoteEl.classList.add('fa-enter-active')
      quoteEl.classList.remove('fa-enter')
      quoteEl.removeEventListener('animationend', showHandler)
    }

    quoteEl.classList.add('fa-leave-active')

    quoteEl.addEventListener('animationend', handler)
  }

  function getRndQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }
})()
