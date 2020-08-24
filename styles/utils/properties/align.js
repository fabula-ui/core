const alignUtils = params => {
    return `
        > [data-fab-component] {
            ${alignCSS(params)}
        }

        ${alignCSS(params)}
    `
}

const alignCSS = params => {
    const { props } = params;
    const alignments = {
        bottom: 'flex-end',
        center: 'center',
        end: 'flex-end',
        left: 'flex-start',
        right: 'flex-end',
        start: 'flex-start',
        top: 'flex-start'
    };
    const alignment = (props.al || props.align) ? alignments[props.al || props.align] : null;
    const alignmentH = (props.alH || props.alignH) ? alignments[props.alH || props.alignH] : null;
    const alignmentV = (props.alV || props.alignV) ? alignments[props.alV || props.alignV] : null;
    const layout = (props.direction === 'column') ? 'v' : 'h';

    return `
        ${
        alignment ?
            `
                align-items: ${alignment}!important;
                justify-content: ${alignment}!important;
            `
            : ''
        }

        ${(alignmentH && layout === 'v') ? `align-items: ${alignmentH}!important;` : ''}
        ${(alignmentH && layout === 'h') ? `justify-content: ${alignmentH}!important;` : ''}

        ${(alignmentV && layout === 'h') ? `align-items: ${alignmentV}!important;` : ''}
        ${(alignmentV && layout === 'v') ? `justify-content: ${alignmentV}!important;` : ''}

        // ${props.alH ? `opacity: .2;` : ''}
    `
}

export default alignUtils;