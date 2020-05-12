const colorModifier = colorName => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.text;
    const { colors } = vars;
    const color = colors[colorName];

    return `
        .fab-text {
            color: ${color};
        }
    `;
}

export default colorModifier;