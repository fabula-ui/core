const layoutModifier = params => {
    const { props, framework } = params;
    const wrapper = framework === 'angular' ? '.fab-card' : '&';

    return `
        ${wrapper} {
            display: ${(props.layout === 'h' || props.layout === 'horizontal') ? 'flex' : 'block'}; 
            ${(props.layout === 'h' || props.layout === 'horizontal') ? `flex-direction: row;` : ''
        }
    `
}

export default layoutModifier;