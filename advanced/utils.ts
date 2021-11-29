export function defaultPageTransition(node, opts?) {
	return {
		delay: opts?.delay || 0,
		duration: opts?.duration || 150, // 300ms in total because outro + intro
		css(t) {
			return `opacity: ${t}`
		},
	}
}
