;(function () {
  const tabs = document.querySelectorAll('.tab')
  const links = document.querySelectorAll('.nav-list__item')

  links.forEach(li => {
    li.addEventListener('click', () => {
      const bgUrl = li.getAttribute('data-bg-url')
      document.documentElement.style.setProperty('--bg-image-url', bgUrl)

      const tabIdx = +li.getAttribute('data-tab')
      tabs.forEach((tab, idx) => {
        tabIdx === idx
          ? tab.classList.remove('not-active-tab')
          : tab.classList.add('not-active-tab')
      })
    })
  })
})()
