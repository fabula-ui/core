import { bgColor, textColor } from '../../utils/color.utils';
import { capitalize } from '../../utils/misc.utils';

export const colorModifier = colorName => {
    const theme = window.__FABTheme;
    const color = theme.variables.colors[colorName];

    return `
        .fab-avatar {
            background: ${bgColor(color, 'fill')};
        }

        .fab-avatar__initials {
            color: ${textColor(color, 'fill')};
        }
    `;
};

export const roundedModifier = () => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.avatar;
    const { borderRadiusRounded } = vars;

    return `
        .fab-avatar[data-rounded='true'] {
            border-radius: ${borderRadiusRounded};
        }
    `
}

export const sizeModifier = sizeName => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.avatar;
    const { borderRadiusDefault, fontSize, size } = vars;
    const multiplier = vars[`sizeMultiplier${capitalize(sizeName)}`];

    return `
    .fab-avatar[data-size='${sizeName.toLowerCase()}'] {
        border-radius: ${borderRadiusDefault * multiplier}rem;
        height: ${size * multiplier}rem;
        width: ${size * multiplier}rem;

        .fab-avatar__initials {
            font-size: ${fontSize * multiplier}rem;
        }
    }
    `;
}