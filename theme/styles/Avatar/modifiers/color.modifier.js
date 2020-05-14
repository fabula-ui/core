import bgColor from '../../../methods/color/bgColor';
import textColor from '../../../methods/color/textColor';

const colorModifier = colorName => {
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

export default colorModifier;