const theme = window.__FABTheme;

const AvatarStyles = props => {
    return `
        .fab-avatar {
            background: ${theme.backgroundColor};
            height: 300px;
            width: 300px;
        }
    `
}

export default AvatarStyles;