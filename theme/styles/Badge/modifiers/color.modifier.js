import bgColor from '../../../methods/color/bgColor';
import getColor from '../../../methods/color/getColor';
import textColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.badge;
    const {colors} = vars;
    const color = getColor(props.color, colors);

    return `
        .fab-badge {
            background-color: ${bgColor(color, 'fill')};
            color: ${textColor(color, 'fill')};
        }
    `;
};

export default colorModifier;