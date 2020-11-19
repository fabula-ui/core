const placementModifier = params => {
    const { props } = params;

    return `
        .fab-badge {
            ${props.placement.y === 'bottom' ? 'bottom: 0;' : ''}
            ${props.placement.x === 'left' ? 'left: 0;' : ''}
            position: absolute;
            ${props.placement.x === 'right' ? 'right: 0;' : ''}
            ${props.placement.y === 'top' ? 'top: 0;' : ''}
            transform: translate(${props.placement.x === 'left' ? '-25%' : '25%'}, ${props.placement.y === 'top' ? '-25%' : '25%'});
        }
    `;
}

export default placementModifier;