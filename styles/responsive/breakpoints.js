// Utils
import UtilStyles from '../../theme/utils/index';

const order = ['xs', 'sm', 'md', 'lg', 'xl'];
const breakpoints = {
    xl: '1200px',
    lg: '992px',
    md: '768px',
    sm: '576px',
    xs: 0
}

const convertStyles = styles => {
    let css = '& {';

    for (let key in styles) {
        css += `${key}: ${styles[key]};`
    }

    css += '}';

    return css;
}

const down = (bp, content, styles, utils) => {
    const breakpoint = breakpoints[bp];

    if (breakpoint) {
        return `
            @media (max-width: ${breakpoint}) {
                ${!!content ? content : ''}
                ${!!styles ? convertStyles(styles) : ''}
                ${!!utils ? UtilStyles({ props: utils }) : ''}
            }
        `
    } else {
        return content || ''
    }
}

const on = (bp, content, styles, utils) => {
    const breakpoint = breakpoints[bp];
    const bpIndex = order.indexOf(bp);
    const lowerBreakpoint = bpIndex > 0 ? breakpoints[order[bpIndex - 1]] : null;

    if (breakpoint) {
        return `
            @media ${lowerBreakpoint ? `(min-width: ${lowerBreakpoint}) and ` : ''} (max-width: ${breakpoint}) {
                ${!!content ? content : ''}
                ${!!styles ? convertStyles(styles) : ''}
                ${!!utils ? UtilStyles({ props: utils }) : ''}
            }
        `
    } else {
        return content || ''
    }
}

const up = (bp, content, styles, utils) => {
    const breakpoint = breakpoints[bp];

    if (breakpoint) {
        return `
            @media (min-width: ${breakpoint}) {
                ${!!content ? content : ''}
                ${!!styles ? convertStyles(styles) : ''}
                ${!!utils ? UtilStyles({ props: utils }) : ''}
            }
        `
    } else {
        return content || ''
    }
}

export {
    down,
    on,
    up
}