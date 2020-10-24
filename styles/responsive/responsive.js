import * as handlers from './breakpoints';
import { breakpoints, breakpointsOrder } from './breakpoints';

const getBreakpointProps = (context, params) => {
	const { props } = params;
	let css = ``;

	// keys.map(key => {
	// 	const index = breakpointsOrder.indexOf(key);

	// 	if (index > -1) {
	// 		userBreakpointsReordered[index] = key;
	// 	}
	// })
	// Object.keys(props[context]);

	for (let i = 0; i < breakpointsOrder.length; i++) {
		const breakpoint = breakpointsOrder[i];

		if (props[context][breakpoint]) {
			css += handlers[context](breakpoint, params);
			// console.log('has ', handlers[context]);
		}
	}

	// for (let i = 0; i < props[context].length; i++) {
	// 	// const contextProp = props[context][i];
	// 	// const content =
	// 	// 	!!styles && !!contextProp.props ? styles({ ...params, props: { ...props, ...contextProp.props } }) : null;

	// 	css += breakpoints[context](contextProp.breakpoint, content, contextProp.styles, contextProp.utils);
	// }

	return css;
};

const ResponsiveStyles = (params) => {
	const { props, responsiveStyles, styles, utilsStyles } = params;
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
