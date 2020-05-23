const sizeModifier = size => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const { borderRadius, fontSize, minHeight, padding } = vars;
    const sizeMultiplier = vars[`sizeMultiplier__${size}`];

    return `
        .fab-input-wrapper {
            font-size: calc(${fontSize} * ${sizeMultiplier});
        }

        .fab-input__field {
            border-radius: calc(${borderRadius} * ${sizeMultiplier});
            min-height: calc(${minHeight} * ${sizeMultiplier});
            padding-left: calc(${padding} * ${sizeMultiplier});
            padding-right: calc(${padding} * ${sizeMultiplier});
        }
    `;
}

export default sizeModifier;