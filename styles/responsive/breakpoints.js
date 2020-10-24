// Utils
import UtilStyles from '../utils/utils';

export const breakpointsOrder = ['xl', 'lg', 'md', 'sm', 'xs'];
export const breakpoints = {
    xl: '1200px',
    lg: '992px',
    md: '768px',
    sm: '576px',
    xs: 0
}

const down = (bp, params) => {
    const { styles, utils } = params;
    const breakpoint = breakpoints[bp];

    if (breakpoint) {
        return `
            @media (max-width: ${breakpoint}) {
                ${!!styles ? styles({ ...params, props: params.props.down[bp] }) : ''}
                ${!!utils ? UtilStyles({ ...params, props: params.props.down[bp] }) : ''}
            }
        `
    } else {
        return ''
    }
}

const on = (bp, params) => {
    const { styles, utils } = params;
    const breakpoint = breakpoints[bp];
    const bpIndex = order.indexOf(bp);
    const lowerBreakpoint = bpIndex > 0 ? breakpoints[order[bpIndex - 1]] : null;

    if (breakpoint) {
        return `
            @media ${lowerBreakpoint ? `(min-width: ${lowerBreakpoint}) and ` : ''} (max-width: ${breakpoint}) {
                ${!!styles ? styles({ ...params, props: params.props.on[bp] }) : ''}
                ${!!utils ? UtilStyles({ ...params, props: params.props.on[bp] }) : ''}
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
                ${!!styles ? styles({ ...params, props: params.props.up[bp] }) : ''}
                ${!!utils ? UtilStyles({ ...params, props: params.props.up[bp] }) : ''}
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