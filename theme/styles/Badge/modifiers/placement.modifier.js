const placementModifier = params => {
    const { framework, props } = params;
    const { placement } = props;
    const wrapper = framework === 'angular' ? '.fab-badge-wrapper' : '&';

    return `
        ${wrapper} .fab-badge {
            ${placement.y === 'bottom' ? 'bottom: 0;' : ''}
            ${placement.x === 'left' ? 'left: 0;' : ''}
            position: absolute;
            ${placement.x === 'right' ? 'right: 0;' : ''}
            ${placement.y === 'top' ? 'top: 0;' : ''}
            transform: translate(${placement.x === 'left' ? '-25%' : '25%'}, ${placement.y === 'top' ? '-25%' : '25%'});
        }
    `;
}

export default placementModifier;