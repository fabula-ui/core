const sizeModifier = size => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.text;
    const { fontSize } = vars;
    const sizeMultiplier = vars[`sizeMultiplier__${size}`];

    return `
        .fab-text {
            font-size: calc(${fontSize} * ${sizeMultiplier});
        }
    `;
}

export default sizeModifier;