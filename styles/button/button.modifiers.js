import {
    activeColor,
    focusColor,
    hoverColor,
    textColor,
} from '../../theme/utils/color.utils';

export const block = `
    .fab-button[data-block='true'] {
        width: 100%;
    }
`;

export const color = (theme, colorName) => {
    const color = theme.colors[colorName];

    return `
        .fab-button[data-color='${colorName}']:not([data-clear='true']):not([data-outline='true']) {
            background: ${color};
            border: solid ${theme.components.button.borderWidth} border-color(${colorName});
            color: ${textColor(color)};

            &:hover:not([disabled]) {
                background: ${hoverColor(color, 'fill')};
            }

            &:active:not([disabled]) {
                background: ${activeColor(color)};
            }

            &:focus:not(:active) {
                box-shadow: 0 0 0 0.125em ${focusColor(color)};
            }
        }
    `;
};

export const cornerStyle = (theme, cornerStyle) => {
    return `
    .fab-button[data-corner-style='${cornerStyle}'] {
        border-radius: ${theme.globals.cornerStyles[cornerStyle]};
    }
    `;
};
