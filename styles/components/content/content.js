const ContentStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-content' : '&';

    return `
        ${wrapper}[data-active='false'] {
            display: none;
        }
    `
}

export default ContentStyles;