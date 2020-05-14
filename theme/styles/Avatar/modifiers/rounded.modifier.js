const roundedModifier = () => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.avatar;
    const { borderRadiusRounded } = vars;

    return `
        .fab-avatar[data-rounded='true'] {
            border-radius: ${borderRadiusRounded};
        }
    `
}

export default roundedModifier;