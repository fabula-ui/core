import {
    dividerColor,
    elementColor
} from '../../utils/color.utils';

export const color = (theme, colorName) => {
    const color = theme.colors[colorName] || '#FFF';

    return `
        .fab-collapse[data-color='${colorName}'] {
            background: ${color};

            .fab-collapse-content {
                border-color: ${dividerColor(color)};
            }
        }
    `;
};