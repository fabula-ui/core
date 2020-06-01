const wideModifier = () => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { paddingLeft, paddingRight, wideMultiplier } = vars;

    return `
        .fab-button {
            padding-left: calc(${paddingLeft} * ${wideMultiplier});
            padding-right: calc(${paddingRight} * ${wideMultiplier});
        }
    `;
}

export default wideModifier;