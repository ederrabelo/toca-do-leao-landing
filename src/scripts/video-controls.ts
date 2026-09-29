/** Keep the original video control's icon and accessible name in sync. */
export function updateVideoToggle(button: HTMLButtonElement, isPaused: boolean) {
  button.setAttribute('aria-label', isPaused ? 'Reproduzir vídeo' : 'Pausar vídeo')
  const icon = button.querySelector<HTMLTemplateElement>(
    isPaused ? '[data-play-icon]' : '[data-pause-icon]',
  )?.content.firstElementChild

  if (icon) {
    button.querySelector(':scope > svg')?.remove()
    button.prepend(icon.cloneNode(true))
  }
}
