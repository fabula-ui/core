import getBgColor from '../../../methods/color/bgColor';
import getColorName from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.modalSection;
    const { color } = props;
    const { colors } = vars;

    const context = getContext(props);
    const colorName = getColorName(color, colors);

    return `
        .fab-modal-section {
            background: ${getBgColor(colorName, context)};
            color: ${getTextColor(colorName, context)};
        }
    `;
}

export default colorModifier;