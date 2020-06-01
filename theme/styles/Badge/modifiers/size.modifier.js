const sizeModifier = params => {
    const { framework, props } = params;
    const { size } = props;
    const { fontSize, sizeMultipliers } = window.__FABTheme.variables.components.badge;
    const multiplier = sizeMultipliers[size || 'md'];
    const wrapper = framework === 'angular' ? '.fab-badge-wrapper' : '&';

    return `
        .fab-badge {
            font-size: calc(${fontSize} * ${multiplier});
        }
    `;
}

export default sizeModifier;