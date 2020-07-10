const SegmentContentStyles = params => {
    const { framework } = params;

    const wrapper = framework === 'angular' ? '.fab-segment-content' : '&';

    return `
        ${wrapper}[data-active='false'] {
            display: none;
        }
    `
}

export default SegmentContentStyles;