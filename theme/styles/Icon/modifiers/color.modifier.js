import getColorName from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.icon;
    const { color } = props;
    const { colors } = vars;

    const colorName = getColorName(color, colors);
    const context = getContext(props);
    
    return `
        .fab-icon {
            background-color: ${getTextColor(colorName, context)};
        }
    `;
}

export default colorModifier;