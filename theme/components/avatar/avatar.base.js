export const baseStyles = theme => {
    const props = theme.components.avatar;

    return `
    .fab-avatar {
        background-color: ${props.backgroundColor};
        height: ${props.sizes.default.height};
        overflow: hidden;
        position: relative;
        width: ${props.sizes.default.width};
    }

    .fab-avatar-wrapper {
        align-self: flex-start;
        display: inline-flex;
        position: relative;
    }
    `
};