import bgColor from '../../../methods/color/bgColor';
import textColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.badge;
    const color = vars.colors[props.color];

    return `
        .fab-badge {
            background-color: ${bgColor(color, 'fill')};
            color: ${textColor(color, 'fill')};
        }
    `;
};

export default colorModifier;