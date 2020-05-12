import bgColor from '../../../utils/colors/bgColor';
import textColor from '../../../utils/colors/textColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.badge;
    const color = vars.colors[props.color];

    console.log(vars);

    return `
        .fab-badge {
            background-color: ${bgColor(color, 'fill')};
            color: ${textColor(color, 'fill')};
        }
    `;
};

export default colorModifier;