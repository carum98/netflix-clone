function createPopover(message: string) {
	const popover = document.createElement('div')
	popover.innerHTML = message
	popover.classList.add('popover')

	return popover
}

export const usePopover = () => {
	function show(el: EventTarget | null, message: string) {
		const popover = createPopover(message)

		const body = document.querySelector('body')
		body?.appendChild(popover)

		position(el, popover)

		el?.addEventListener('mouseleave', (e) => {
			popover.remove()
		})
	}

	return {
		show
	}
}