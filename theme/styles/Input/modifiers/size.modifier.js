const sizeModifier = params => {
    const { framework, props } = params;
    const { size } = props;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const { borderRadius, fontSize, minHeight, sizeMultipliers } = vars;
    const sizeMultiplier = sizeMultipliers[size || 'md'];
    const wrapper = framework === 'angular' ? '.fab-input-wrapper' : '&';

    return `
        ${wrapper} {
            font-size: calc(${fontSize} * ${sizeMultiplier});
        }

        .fab-input__field {
            border-radius: calc(${borderRadius} * ${sizeMultiplier});
            min-height: calc(${minHeight} * ${sizeMultiplier});
        }
    `;
}

export default sizeModifier;