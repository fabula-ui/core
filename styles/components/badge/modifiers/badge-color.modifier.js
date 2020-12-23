import { getBgColor } from '../../../methods/color/getBgColor';
import { getBorderColor } from '../../../methods/color/getBorderColor';
import { getColor } from '../../../methods/color/getColor';
import { getComponentVars } from '../../../methods/misc/getComponentVars';
import { getContext } from '../../../methods/misc/getContext';
import { getDividerColor } from '../../../methods/color/getDividerColor';
import { getGlowColor } from '../../../methods/color/getGlowColor';
import { getTextColor } from '../../../methods/color/getTextColor';

export const colorModifier = params => {
    const { props } = params;
    const vars = getComponentVars('badge');
    const borderColor = getColor(props.borderColor || props.color, vars.colors);
    const color = (props.color || props.clear) ? getColor(props.color, vars.colors, vars.color) : vars.color;
    const context = (props.color || props.clear) ? getContext(props) : 'fill';

    return `
        .fab-badge {
            background: ${getBgColor(color, context)};
            border-color: ${!!props.border ? `${getDividerColor(borderColor, context)}` : 'transparent'};
            ${((props.borderColor || props.outline) && !!props.border) ? `border-color: ${getBorderColor(borderColor, context)};` : ''}
            ${props.glow ? `box-shadow: 0 1px 3px ${getGlowColor(color, context)};` : ''}
            color: ${props.color ? getTextColor(color, context) : vars.textColor };
        }
    `;
};