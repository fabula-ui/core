export const base = theme => {
    const {
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop
    } = theme.components.collapseToggle;

    return `
    .fab-collapse-toggle {
        appearance: none;
        background: inherit;
        border: none;
        box-sizing: border-box;
        cursor: pointer;
        justify-content: center;
        padding: ${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft};
        width: 100%;
    
        &:focus {
            outline: none;
        }

        > * {
            box-sizing: border-box;
        }
    }
    
    .fab-collapse-toggle__title {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        text-align: left;
    }
    `
};