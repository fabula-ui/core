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
                align-items: ${alignments[al || align] || al || align};
                justify-content: ${alignments[al || align] || al || align};
            `
            : ''
        }

        ${alH || alignH ? `justify-content: ${alignments[alH || alignH] || alH || alignH};` : ''}
        ${alV || alignV ? `align-items: ${alignments[alV || alignV] || alV || alignV};` : ''}
        ${framework === 'angular' ? '' : '}'}
    `
}

export default alignUtils;