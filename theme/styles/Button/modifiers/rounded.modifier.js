const roundedModifier = () => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { borderRadiusRounded } = vars;

    return `
        .fab-button {
            border-radius: 999px;

            &:before {
                border-radius: 999px;
            }
        }
    `;
}

export default roundedModifier;