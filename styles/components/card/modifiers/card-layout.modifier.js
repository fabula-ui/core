const layoutModifier = params => {
    const { props } = params;

    return `
        .fab-card {
            display: flex;
            flex-direction: ${props.layout === 'h' || props.layout === 'horizontal' ? 'row' : 'column'};
        }
    `
}

export default layoutModifier;