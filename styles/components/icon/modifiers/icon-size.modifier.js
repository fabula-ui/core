const sizeModifier = params => {
    const { framework, props } = params;
    const vars = window.__FABTheme.variables.components.avatar;
    const { size } = props;
    const { sizeMultipliers } = vars;
    const multiplier = sizeMultipliers[size];
    const wrapper = framework === 'angular' ? '.fab-icon' : '&';

    return `
        ${wrapper} {
            font-size: calc(1em * ${multiplier});
        }
    `;
}

export default sizeModifier;