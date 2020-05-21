import getColorName from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.icon;
    const { fillColor } = props;
    const { colors } = vars;

    const context = getContext(props);
    const fillColorName = getColorName(fillColor, colors);

    return `
        .fab-icon {
            background-color: ${getTextColor(fillColorName, context)};
        }
    `;
}

export default colorModifier;