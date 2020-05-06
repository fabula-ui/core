const AvatarBase = theme => {
    const component = theme.components.avatar;

    return `
    .fab-avatar {
        background-color: ${component.backgroundColor};
        height: ${component.sizes.default.height};
        overflow: hidden;
        position: relative;
        width: ${component.sizes.default.width};
    }

    .fab-avatar-wrapper {
        align-self: flex-start;
        display: inline-flex;
        position: relative;
    }
    `
}

export default AvatarBase;