import { trackEvent } from './tracking'

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return

  const link = event.target.closest<HTMLAnchorElement>('a[data-track-event]')
  if (!link) return

  const { trackEvent: eventName, ctaSource: source } = link.dataset
  if (eventName && source) trackEvent(eventName, source)

  if (eventName !== 'route_click') return

  event.preventDefault()
  const routeUrl = link.href
  const navigate = (url: string) => { window.location.href = url }

  if (!navigator.geolocation) {
    navigate(routeUrl)
    return
  }

  navigator.geolocation.getCurrentPosition(
    ({ coords }) => navigate(`${routeUrl}&origin=${encodeURIComponent(`${coords.latitude},${coords.longitude}`)}`),
    () => navigate(routeUrl),
    { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 },
  )
})

document.querySelectorAll<HTMLDetailsElement>('details[data-faq-question]').forEach((details) => {
  details.addEventListener('toggle', () => {
    if (details.open) trackEvent('faq_open', details.dataset.faqQuestion!)
  })
})

// Preserve navigation from the history page to a home section.
if (window.location.hash) {
  window.requestAnimationFrame(() => {
    try {
      document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView()
    } catch {
      // Invalid fragments must not interrupt other page interactions.
    }
  })
}
