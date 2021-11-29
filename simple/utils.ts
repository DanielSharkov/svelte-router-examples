export function defaultPageTransition(node, o?) {
	return {
		duration: 150, // 300ms in total because outro + intro
		css(t) {
			return `opacity: ${t}`
		},
	}
}
