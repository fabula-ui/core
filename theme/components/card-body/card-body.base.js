export const base = (theme) => {
    const {
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop
    } = theme.components.card;

    return `
    .fab-card-body {
        display: flex;
        flex-direction: column;
        padding: ${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft};
    }
    `;
};