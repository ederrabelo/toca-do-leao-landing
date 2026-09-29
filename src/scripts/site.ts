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

// Open shared section URLs at their section while keeping the short URL in the address bar.
const sectionTarget = document.body.dataset.sectionTarget
if (window.location.hash || sectionTarget) {
  window.requestAnimationFrame(() => {
    try {
      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)) || sectionTarget || '')
      if (!target) return
      const previousScrollBehavior = document.documentElement.style.scrollBehavior
      document.documentElement.style.scrollBehavior = 'auto'
      target.scrollIntoView()
      window.requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = previousScrollBehavior
      })
    } catch {
      // Invalid fragments must not interrupt other page interactions.
    }
  })
}
