function createPopover(message: string) {
	const popover = document.createElement('div')
	popover.innerHTML = message
	popover.classList.add('popover')

	return popover
}

function popoverPosition(el: EventTarget | null, popover: HTMLElement) {
	const elRect = (el as HTMLElement).getBoundingClientRect()
	const popoverRect = popover.getBoundingClientRect()

	const x = elRect.left - popoverRect.width / 2 + elRect.width / 2
	const y = elRect.top - popoverRect.height - 10

	popover.style.top = `${y}px`
	popover.style.left = `${x}px`
}


export const usePopover = () => {
	function show(el: EventTarget | null, message: string) {
		const popover = createPopover(message)

		const body = document.querySelector('body')
		body?.appendChild(popover)

		popoverPosition(el, popover)

		el?.addEventListener('mouseleave', (e) => {
			popover.remove()
		})
	}

	return {
		show
	}
}