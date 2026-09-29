declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

export function trackEvent(event: string, source: string) {
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event, source })
}
