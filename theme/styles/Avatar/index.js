const AvatarStyles = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.avatar;

    console.log(theme);

    return `
        .fab-avatar {
            background: ${vars.defaultColor};
            border-radius: ${vars.borderRadiusDefault};
            height: ${vars.size};
            width: ${vars.size};
        }
    `
}

export default AvatarStyles;