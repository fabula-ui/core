import * as handlers from './breakpoints';
import { breakpointsOrder } from './breakpoints';

const getBreakpointProps = (context, params) => {
	const { props } = params;
	let css = ``;

	for (let i = 0; i < breakpointsOrder.length; i++) {
		const breakpoint = breakpointsOrder[i];

		if (props[context][breakpoint]) {
			css += handlers[context](breakpoint, params);
		}
	}

	return css;
};

const ResponsiveStyles = (params) => {
	const { props } = params;
	let css = ``;

	if (props.down) {
		css += getBreakpointProps('down', params);
	}

	if (props.on) {
		css += getBreakpointProps('on', params);
	}

	if (props.up) {
		css += getBreakpointProps('up', params);
	}

	return css;
};

export default ResponsiveStyles;
