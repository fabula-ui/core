const sizeModifier = params => {
    const { framework, props } = params;
    const { size } = props;
    const vars = window.__FABTheme.variables.components.text;
    const { fontSize, sizeMultipliers } = vars;
    const multiplier = sizeMultipliers[size];
    const wrapper = framework === 'angular' ? '.fab-text' : '&';

    return `
        ${wrapper} {
            font-size: calc(${fontSize} * ${multiplier});
        }
    `;
}

export default sizeModifier;