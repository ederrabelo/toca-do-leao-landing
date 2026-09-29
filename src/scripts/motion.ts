const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
let observer: IntersectionObserver | undefined

function reveal(item: HTMLElement, immediate = false) {
  if (immediate && item.classList.contains('reveal-pending')) {
    item.style.transition = 'none'
    requestAnimationFrame(() => item.style.removeProperty('transition'))
  }
  item.classList.remove('reveal-pending')
  item.classList.add('is-visible')
  observer?.unobserve(item)
}

function revealAll() {
  observer?.disconnect()
  items.forEach((item) => reveal(item, true))
}

if (!motionPreference.matches && 'IntersectionObserver' in window) {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) reveal(entry.target as HTMLElement)
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' })

  items.forEach((item) => {
    // Keep initial content and restored scroll positions readable without a flash.
    if (item.getBoundingClientRect().top < window.innerHeight) {
      reveal(item)
      return
    }
    const siblings = Array.from(item.parentElement?.children ?? []).filter((child) => child.hasAttribute('data-reveal'))
    item.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(item), 3) * 55}ms`)
    item.classList.add('reveal-pending')
    observer!.observe(item)
  })
  // Only enhance after the observer is ready: no JS or unsupported browsers keep all content.
  document.documentElement.classList.add('motion-ready')
} else {
  revealAll()
}

// Keyboard navigation, anchor links and printing should never target invisible content.
document.addEventListener('focusin', (event) => {
  if (!(event.target instanceof Element)) return
  const item = event.target.closest<HTMLElement>('[data-reveal]')
  if (item) reveal(item, true)
})
function revealHashTarget() {
  try {
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
    if (!target) return
    if (target.matches('[data-reveal]')) reveal(target, true)
    target.querySelectorAll<HTMLElement>('[data-reveal]').forEach((item) => reveal(item, true))
  } catch {
    // Ignore malformed URL fragments without interrupting other interactions.
  }
}
window.addEventListener('hashchange', revealHashTarget)
window.addEventListener('beforeprint', revealAll)
window.addEventListener('pageshow', (event) => { if (event.persisted) revealAll() })
motionPreference.addEventListener('change', () => { if (motionPreference.matches) revealAll() })
revealHashTarget()

// Native details/summary remains the fallback; animate only the height when supported.
document.querySelectorAll<HTMLDetailsElement>('.faq-list details').forEach((item) => {
  const summary = item.querySelector('summary')
  if (!summary || typeof item.animate !== 'function') return
  let animation: Animation | null = null
  let expanded = item.open

  const settle = () => {
    item.open = expanded
    animation?.cancel()
    animation = null
    item.classList.remove('faq-is-animating')
  }

  item.addEventListener('toggle', () => {
    if (!animation) expanded = item.open
  })
  motionPreference.addEventListener('change', () => {
    if (motionPreference.matches && animation) settle()
  })
  window.addEventListener('beforeprint', () => { if (animation) settle() })

  summary.addEventListener('click', (event) => {
    if (motionPreference.matches) return
    event.preventDefault()
    const startHeight = item.getBoundingClientRect().height
    animation?.cancel()
    expanded = !expanded

    if (expanded) item.open = true
    const styles = getComputedStyle(item)
    const borderHeight = parseFloat(styles.borderTopWidth) + parseFloat(styles.borderBottomWidth)
    const endHeight = expanded
      ? item.getBoundingClientRect().height
      : summary.getBoundingClientRect().height + borderHeight

    item.classList.add('faq-is-animating')
    animation = item.animate(
      { height: [`${startHeight}px`, `${endHeight}px`] },
      { duration: 280, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'both' },
    )
    animation.onfinish = settle
  })
})
