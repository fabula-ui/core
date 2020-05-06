export const children = theme => {
    const props = theme.components.avatar;

    return `
    .fab-avatar__icon {
        font-size: calc(${props.height} / 2.25);
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    
    .fab-avatar__image {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
    }
    `
};