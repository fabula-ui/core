export const base = theme => {
    const {
        backgroundColor,
        color,
        fontSize,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop
    } = theme.components.tooltip;
    return `
    .fab-tooltip {
        align-items: center;
        display: flex;
        flex-direction: column;
        font-family: ${theme.globals.fontFamily};
        font-size: ${fontSize};
        opacity: 0;
        transition: all ${theme.globals.transitionBase};
        visibility: hidden;
    }

    .fab-tooltip[data-visible='true'] {
        opacity: 1;
        visibility: visible;
    }

    .fab-tooltip__body {
        background: ${backgroundColor};
        color: ${color};
        padding: ${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft};
    }

    .fab-tooltip-wrapper {
        align-items: center;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 1;

        & * {
            box-sizing: border-box;
        }
    }
    `;
};