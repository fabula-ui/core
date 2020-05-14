const compactModifier = () => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { compactMultiplier, paddingLeft, paddingRight } = vars;

    return `
        .fab-button {
            padding-left: ${paddingLeft * compactMultiplier}rem;
            padding-right: ${paddingRight * compactMultiplier}rem;
        }
    `;
}

export default compactModifier;