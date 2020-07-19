import getBgColor from '../../../methods/color/getBgColor';
import getBorderColor from '../../../methods/color/getBorderColor';
import getDividerColor from '../../../methods/color/getDividerColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/getTextColor';
import getGlowColor from '../../../methods/color/getGlowColor';

const colorModifier = props => {
    const vars = getComponentVars('alert');
    const borderColor = getColor(props.borderColor || props.color, vars.colors);
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';

    return `
        .fab-alert {
            background: ${getBgColor(color, context)};
            border-color: ${!!props.border ? `${getDividerColor(borderColor, context)}` : 'transparent'};
            ${((props.borderColor || props.outline) && !!props.border) ? `border-color: ${getBorderColor(borderColor, context)};` : ''}
            ${props.glow ? `box-shadow: 0 ${vars.glowRadiusX} ${vars.glowRadiusY} ${getGlowColor(color, context)};` : ''}
            color: ${getTextColor(color, context)};
        }

        .fab-alert__text {
            ${props.textColor ? `color: ${getColor(props.textColor, vars.colors)};` : ''}
        }

        .fab-alert__title {
            ${props.titleColor ? `color: ${getColor(props.titleColor, vars.colors)};` : ''}
        }
    `
}

export default colorModifier;