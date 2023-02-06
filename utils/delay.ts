export const delay = (ms: number): { promise: Promise<null>, id: number } => {
	let id = 0;

	const promise = new Promise<null>(resolve => {
		id = window.setTimeout(resolve, ms);
	});

	return {
		promise,
		id,
	}
}