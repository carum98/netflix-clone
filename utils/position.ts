export const position = (el: EventTarget | null, popover: HTMLElement) => {
	const elRect = (el as HTMLElement).getBoundingClientRect()
	const popoverRect = popover.getBoundingClientRect()

	const x = elRect.left - popoverRect.width / 2 + elRect.width / 2
	const y = elRect.top - popoverRect.height - 10

	popover.style.top = `${y}px`
	popover.style.left = `${x}px`
}