const alignUtils = params => {
    const { framework, props } = params;
    const { al, alH, alV, align, alignH, alignV } = props;
    const alignments = {
        center: 'center',
        end: 'flex-end',
        left: 'flex-start',
        right: 'flex-end',
        start: 'flex-start'
    };

    return `
        ${framework === 'angular' ? '' : '& {'}
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
        
        ${framework === 'angular' ? '' : '}'}
    `
}

export default alignUtils;