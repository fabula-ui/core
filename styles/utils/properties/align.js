const alignUtils = params => {
    const { framework, props } = params;
    const alignments = {
        bottom: 'flex-end',
        center: 'center',
        end: 'flex-end',
        left: 'flex-start',
        right: 'flex-end',
        start: 'flex-start',
        top: 'flex-start'
    };
    const alignmentH = (props.al || props.alH || props.alignH) ? alignments[props.al || props.alH || props.alignH] : null;
    const alignmentV = (props.al || props.alV || props.alignV) ? alignments[props.al || props.alV || props.alignV] : null;
    const layout = (props.direction === 'column' || props.flow === 'v' || props.flow === 'vertical') ? 'v' : 'h';
    const wrapper = framework === 'angular' ? '> [data-fab-component], > [data-fab-wrapper] > [data-fab-component]' : '&[data-fab-component], &[data-fab-wrapper] > [data-fab-component]';

    return `
        ${wrapper} {
            ${(alignmentH && layout === 'v') ? `align-items: ${alignmentH}!important;` : ''}
            ${(alignmentH && layout === 'h') ? `justify-content: ${alignmentH}!important;` : ''}
            ${(alignmentV && layout === 'h') ? `align-items: ${alignmentV}!important;` : ''}
            ${(alignmentV && layout === 'v') ? `justify-content: ${alignmentV}!important;` : ''}
        }
    `
}

export default alignUtils;