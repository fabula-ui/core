import getBgColor from '../../../methods/color/bgColor'
import getColorName from '../../../methods/color/getColor'
import getContext from '../../../methods/misc/getContext';
import getDividerColor from '../../../methods/color/dividerColor';
import getGlowColor from '../../../methods/color/glowColor';
import getTextColor from '../../../methods/color/textColor';


const colorModifier = params => {
    const { props } = params;
    const vars = window.__FABTheme.variables.components.card;
    const { glow } = props;
    const { colors } = vars;
    const colorName = getColorName(props.color || vars.color, colors);
    const context = getContext(props);

    return `
        .fab-card {
            background: ${getBgColor(colorName, context)};
            border: solid 1px ${getDividerColor(colorName, 'fill')};
            ${glow ? `box-shadow: 0 2px 2px ${getGlowColor(colorName, context)};` : ''}
            color: ${getTextColor(colorName, context)};
        }
    `;
};

export default colorModifier;