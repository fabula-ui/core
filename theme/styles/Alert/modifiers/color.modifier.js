import bgColor from '../../../methods/color/bgColor';
import getBorderColor from '../../../methods/color/borderColor';
import getDividerColor from '../../../methods/color/dividerColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/textColor';
import getGlowColor from '../../../methods/color/glowColor';

const colorModifier = props => {
    const vars = getComponentVars('alert');
    const { glow, outline, textColor, titleColor } = props;

    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';

    return `
        .fab-alert {
            background: ${bgColor(color, context)};
            border-color: ${outline ? `${getBorderColor(color, context)};` : `${getDividerColor(color, context)};`}
            ${glow ? `box-shadow: 0 ${vars.glowRadiusX} ${vars.glowRadiusY} ${getGlowColor(color, context)};` : ''}
            color: ${getTextColor(color, context)};
        }

        .fab-alert__text {
            ${textColor ? `color: ${getColor(textColor, vars.colors)};` : ''}
        }

        .fab-alert__title {
            ${titleColor ? `color: ${getColor(titleColor, vars.colors)};` : ''}
        }
    `
}

export default colorModifier;