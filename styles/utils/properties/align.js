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
    const layout = (props.layout === 'v' || props.layout === 'vertical') ? 'v' : 'h';

    return `
        ${
        alignment ?
            `
                align-items: ${alignment}!important;
                justify-content: ${alignment}!important;
            `
            : ''
        }

        ${alignmentV ? `align-items: ${alignmentV}!important;` : ''}
        ${(layout === 'h' && alignmentV) ? `align-items: ${alignmentV}!important;` : ''}

        ${alignmentH ? `justify-content: ${alignmentH}!important;` : ''}
        ${(layout === 'v' && alignmentV) ? `justify-content: ${alignmentV}!important;` : ''}
    `
}

export default alignUtils;