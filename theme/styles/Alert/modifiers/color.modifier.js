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
    const borderColor = getColor(props.border || props.color, vars.colors);
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';

    return `
        .fab-alert {
            background: ${bgColor(color, context)};
            border-color: ${props.border || props.outline ? `${getBorderColor(borderColor, context)};` : `${getDividerColor(borderColor, context)};`}
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