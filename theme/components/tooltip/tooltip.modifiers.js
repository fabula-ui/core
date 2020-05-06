import {
    textColor
} from '../../utils/color.utils';

export const color = (theme, colorName) => {
    const {arrowSize} = theme.components.tooltip;
    const color = theme.colors[colorName];

    return `
    .fab-tooltip[data-color='${colorName}'] {
        &[data-placement='bottom'] .fab-tooltip__arrow {
            border-bottom-color: ${color};
        }

        &[data-placement='left'] .fab-tooltip__arrow {
            border-left-color: ${color};
        }

        &[data-placement='right'] .fab-tooltip__arrow {
            border-right-color: ${color};
        }

        &[data-placement='top'] .fab-tooltip__arrow {
            border-top-color: ${color};
        }

        .fab-tooltip__body {
            background: ${color};
            border-color: ${color};
            color: ${textColor(color)};
        }
    }
    `;
}

export const cornerStyle = (theme, cornerStyle) => {
    return `
        .fab-tooltip[data-corner-style='${cornerStyle}'] {
            .fab-tooltip__body {
                border-radius: ${theme.globals.cornerStyles[cornerStyle]}
            }
        }
    `;
}

export const placement = (theme, placement) => {
    const { arrowSize, backgroundColor, offset } = theme.components.tooltip;

    return `
    .fab-tooltip-wrapper[data-placement='bottom'] {
        transform: translate(0, ${offset});
    }

    .fab-tooltip-wrapper[data-placement='left'] {
        transform: translate(-${offset}, 0);
    }

    .fab-tooltip-wrapper[data-placement='right'] {
        transform: translate(${offset}, 0);
    }

    .fab-tooltip-wrapper[data-placement='top'] {
        transform: translate(0, -${offset});
    }

    .fab-tooltip[data-placement='bottom'] {
        flex-direction: column;

        &[data-visible='true'] {
            transform: translate(0, ${offset});
        }

        .fab-tooltip__arrow {
            border-bottom: ${arrowSize} solid ${backgroundColor};
            border-left: ${arrowSize} solid transparent;
            border-right: ${arrowSize} solid transparent;
            order: 1;
        }

        .fab-tooltip__body {
            order: 2;
        }
    }

    .fab-tooltip[data-placement='left'] {
        flex-direction: row;

        &[data-visible='true'] {
            transform: translate(-${offset}, 0);
        }

        .fab-tooltip__arrow {
            border-bottom: ${arrowSize} solid transparent;
            border-left: ${arrowSize} solid ${backgroundColor};
            border-top: ${arrowSize} solid transparent;
        }
    }

    .fab-tooltip[data-placement='right'] {
        flex-direction: row;

        &[data-visible='true'] {
            transform: translate(${offset}, 0);
        }

        .fab-tooltip__arrow {
            border-bottom: ${arrowSize} solid transparent;
            border-right: ${arrowSize} solid ${backgroundColor};
            border-top: ${arrowSize} solid transparent;
            order: 1;
        }

        .fab-tooltip__body {
            order: 2;
        }
    }

    .fab-tooltip[data-placement='top'] {
        flex-direction: column;

        &[data-visible='true'] {
            transform: translate(0, -${offset});
        }

        .fab-tooltip__arrow {
            border-left: ${arrowSize} solid transparent;
            border-right: ${arrowSize} solid transparent;
            border-top: ${arrowSize} solid ${backgroundColor};
            order: 1;
        }
    }
    `;
};