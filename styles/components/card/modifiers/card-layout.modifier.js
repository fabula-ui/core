const layoutModifier = params => {
    const { props } = params;

    return `
        .fab-card {
            display: ${props.layout === 'h' || props.layout === 'horizontal' ? 'flex' : 'block'}; 
            ${props.layout === 'h' || props.layout === 'horizontal' ? `flex-direction: row;` : ''}
        }
    `
}

export default layoutModifier;