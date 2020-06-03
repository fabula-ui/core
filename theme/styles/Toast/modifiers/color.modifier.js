import getBgColor from '../../../methods/color/bgColor';
import getBorderColor from '../../../methods/color/borderColor';
import getDividerColor from '../../../methods/color/dividerColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const vars = window.__FABTheme.variables.components.toast;
    const { clear, outline, color } = props;
    const { colors } = vars;
    const colorName = getColor(color, colors);
    const context = getContext(props);

    return `
        .fab-toast {
            background-color: ${getBgColor(colorName, context)};
            border-color: ${!clear && outline ? `${getBorderColor(colorName, context)};` : `${getDividerColor(colorName, context)};`}
            color: ${getTextColor(colorName, context)};
        }
    `;
};

export default colorModifier;