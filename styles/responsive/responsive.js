import * as breakpoints from './breakpoints';

const getBreakpointProps = (context, props, styles, params) => {
	let css = ``;

	for (let i = 0; i < props[context].length; i++) {
		const contextProp = props[context][i];
		const content =
			!!styles && !!contextProp.props ? styles({ ...params, props: { ...props, ...contextProp.props } }) : null;

		css += breakpoints[context](contextProp.breakpoint, content, contextProp.styles, contextProp.utils);
	}

	return css;
};

const ResponsiveStyles = (params) => {
	const { props, styles } = params;
	let css = ``;

	if (props.down) {
		css += getBreakpointProps('down', props, styles, params);
    }
    
    if (props.on) {
		css += getBreakpointProps('on', props, styles, params);
    }
    
    if (props.up) {
		css += getBreakpointProps('up', props, styles, params);
	}

	return css;
};

export default ResponsiveStyles;
