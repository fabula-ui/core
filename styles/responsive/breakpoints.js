// Utils
import getGlobalVars from '../methods/misc/getGlobalVars';
import UtilStyles from '../utils/utils';

export const breakpointsOrder = ['xl', 'lg', 'md', 'sm', 'xs', 'xxs'];

const { breakpoints } = getGlobalVars();

const down = (bp, params) => {
    const { styles, utils } = params;
    const breakpoint = breakpoints[bp];

    if (breakpoint) {
        return `
            @media (max-width: ${breakpoint}) {
                ${!!styles ? styles({ ...params, props: { ...params.props, ...params.props.down[bp] } }) : ''}
                ${!!utils ? UtilStyles({ ...params, props: { ...params.props, ...params.props.down[bp] } }) : ''}
            }
        `
    } else {
        return ''
    }
}

const on = (bp, params) => {
    const { styles, utils } = params;
    const breakpoint = breakpoints[bp];
    const bpIndex = breakpointsOrder.indexOf(bp);
    const minBreakpoint = bpIndex < breakpointsOrder.length - 1 ? breakpoints[breakpointsOrder[bpIndex + 1]] : null;

    console.log(minBreakpoint, breakpoint);

    if (breakpoint) {
        return `
            @media ${minBreakpoint ? `(min-width: ${minBreakpoint}) and ` : ''} (max-width: ${breakpoint}) {
                ${!!styles ? styles({ ...params, props:  {...params.props, ...params.props.on[bp]} }) : ''}
                ${!!utils ? UtilStyles({ ...params, props:  {...params.props, ...params.props.on[bp]} }) : ''}
            }
        `
    } else {
        return ''
    }
}

const up = (bp, params) => {
    const { styles, utils } = params;
    const breakpoint = breakpoints[bp];

    if (breakpoint) {
        return `
            @media (min-width: ${breakpoint}) {
                ${!!styles ? styles({ ...params, props:  {...params.props, ...params.props.up[bp]} }) : ''}
                ${!!utils ? UtilStyles({ ...params, props:  {...params.props, ...params.props.up[bp]} }) : ''}
            }
        `
    } else {
        return ''
    }
}

export {
    down,
    on,
    up
}