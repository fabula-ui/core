const roundedModifier = () => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { borderRadiusRounded } = vars;

    return `
        .fab-button {
            border-radius: ${borderRadiusRounded};

            &:before {
                border-radius: ${borderRadiusRounded};
            }
        }
    `;
}

export default roundedModifier;