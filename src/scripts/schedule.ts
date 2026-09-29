import { trackEvent } from './tracking'

const filters = document.querySelectorAll<HTMLButtonElement>('[data-schedule-filter]')
const days = document.querySelectorAll<HTMLElement>('.schedule-day-card')

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.scheduleFilter!

    filters.forEach((item) => {
      const isActive = item === button
      item.classList.toggle('is-active', isActive)
      item.setAttribute('aria-pressed', String(isActive))
    })

    days.forEach((day) => {
      const slots = Array.from(day.querySelectorAll<HTMLElement>('[data-schedule-title]'))
      slots.forEach((slot) => {
        const tags: string[] = JSON.parse(slot.dataset.scheduleTags ?? '[]')
        slot.hidden = !(filter === 'Todos' || slot.dataset.scheduleTitle === filter || tags.includes(filter))
      })
      day.hidden = slots.every((slot) => slot.hidden)
    })

    trackEvent('schedule_filter_click', filter)
  })
})
