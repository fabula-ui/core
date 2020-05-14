const wideModifier = () => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { paddingLeft, paddingRight, wideMultiplier } = vars;

    return `
        .fab-button {
            padding-left: ${paddingLeft * wideMultiplier}rem;
            padding-right: ${paddingRight * wideMultiplier}rem;
        }
    `;
}

export default wideModifier;