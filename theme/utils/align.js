const alignUtils = params => {
    const { framework } = params;

    return `
        ${framework === 'angular' ? '> [data-fab-component], > [data-fab-wrapper] {' : ''}
        ${alignCSS(params)}
        ${framework === 'angular' ? '}' : ''}

        ${alignCSS(params)}
    `
}

const alignCSS = params => {
    const { props } = params;
    const { al, alH, alV, align, alignH, alignV } = props;
    const alignments = {
        bottom: 'flex-end',
        center: 'center',
        end: 'flex-end',
        left: 'flex-start',
        right: 'flex-end',
        start: 'flex-start',
        top: 'flex-start'
    };

    return `
        ${
        al || align ?
            `
                align-items: ${alignments[al || align] || al || align}!important;
                justify-content: ${alignments[al || align] || al || align}!important;
            `
            : ''
        }

        ${alV || alignV ? `align-items: ${alignments[alV || alignV] || alV || alignV}!important;` : ''}
        ${(props.layout === 'h' || props.layout === 'horizontal') && (alV || alignV) ? `align-items: ${alignments[alV || alignV] || alV || alignV}!important;` : ''}

        ${alH || alignH ? `justify-content: ${alignments[alH || alignH] || alH || alignH}!important;` : ''}
        ${(props.layout === 'v' || props.layout === 'vertical') && (alV || alignV) ? `justify-content: ${alignments[alV || alignV] || alV || alignV}!important;` : ''}
    `
}

export default alignUtils;