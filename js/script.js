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


  const coords = [52.44685, 30.993]
  const map = L.map('mapid').setView(coords, 16)

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGFuc21odCIsImEiOiJjazV2ZHliOTUwcGN6M2xvMDBsem1xNmk2In0.qe4wKA3hbwwt3X3NEclELA',
  }).addTo(map)

  const icon = L.icon({
    iconUrl: './images/location-pin.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -40],
  })
  L.marker(coords, {icon}).addTo(map).bindPopup('<b>Kirova 122a</b>').openPopup()

  const myMap = document.getElementById('mapid')
  const toggleMapBtn = document.getElementById('show-map')
  toggleMapBtn.addEventListener('change', () => {
    toggleMapBtn.checked
      ? myMap.classList.remove('hide')
      : myMap.classList.add('hide')
  })
})()
