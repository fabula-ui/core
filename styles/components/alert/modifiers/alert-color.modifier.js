import { getBgColor } from '../../../methods/color/getBgColor';
import { getBorderColor } from '../../../methods/color/getBorderColor';
import { getDividerColor } from '../../../methods/color/getDividerColor';
import { getColor } from '../../../methods/color/getColor';
import { getComponentVars } from '../../../methods/misc/getComponentVars';
import { getContext } from '../../../methods/misc/getContext';
import { getNumber } from '../../../methods/misc/getNumber';
import { getTextColor } from '../../../methods/color/getTextColor';
import { getGlowColor } from '../../../methods/color/getGlowColor';

export const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('alert');
    const borderColor = getColor(props.borderColor || props.color, vars.colors);
    const color = props.color ? getColor(props.color, vars.colors, vars.color) : vars.color;
    const context = props.color ? getContext(props) : 'fill';
    const wrapper = framework === 'angular' ? '.fab-alert' : '&';

    return `
        ${wrapper} {
            ${!props.clear ? `background: ${getBgColor(color, context)};` : ''}
            border-color: ${!!props.border ? `${getDividerColor(borderColor, context)}` : 'transparent'};
            ${((props.borderColor || props.outline) && !!props.border) ? `border-color: ${getBorderColor(borderColor, context)};` : ''}
            ${props.glow ? `box-shadow: ${getNumber(vars.glowX, 'px')} ${getNumber(vars.glowY, 'px')} ${getNumber(vars.glowRadius, 'px')} ${getNumber(vars.glowSpread, 'px')} ${getGlowColor(color, context)};` : ''}
            color: ${props.color ? getTextColor(color, context) : vars.textColor };
        }

        .fab-alert__text {
            ${props.textColor ? `color: ${getColor(props.textColor, vars.colors)};` : ''}
        }

        .fab-alert__title {
            ${props.titleColor ? `color: ${getColor(props.titleColor, vars.colors)};` : ''}
        }
    `
}