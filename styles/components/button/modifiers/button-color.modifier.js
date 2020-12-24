import getActiveColor from '../../../methods/color/getActiveColor';
import { getBgColor } from '../../../methods/color/getBgColor';
import { getBorderColor } from '../../../methods/color/getBorderColor';
import { getColor } from '../../../methods/color/getColor';
import { getComponentColors } from '../../../methods/misc/getComponentColors';
import { getComponentVars } from '../../../methods/misc/getComponentVars';
import { getContext } from '../../../methods/misc/getContext';
import getFocusGlowColor from '../../../methods/color/getFocusGlowColor';
import { getGlowColor } from '../../../methods/color/getGlowColor';
import { getHoverColor } from '../../../methods/color/getHoverColor';
import { getHoverTextColor } from '../../../methods/color/getHoverTextColor';
import { getTextColor } from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const { bgColor, borderColor, glowColor, hoverBgColor, hoverTextColor, textColor } = getComponentColors('alert', props);
    const vars = getComponentVars('button');
    const color = (props.color || props.clear) ? getColor(props.color, vars.colors) : vars.color;
    const context = (props.color || props.clear) ? getContext(props) : 'fill';
    const focusGlowColor = (!!props.focusGlowColor && getColor(props.focusGlowColor) || props.color) ? color : vars.focusGlowColor;
    const wrapper = framework === 'angular' ? '.fab-button' : '&';

    // User defined colors
    const userBgColor = props.bgColor ? getColor(props.bgColor, vars.colors) : null;
    const userTextColor = props.textColor ? getColor(props.textColor, vars.colors) : null;

    return `
        ${wrapper} {
            background: ${bgColor};
            border-color: ${borderColor};
            ${props.glow ? `box-shadow: ${vars.glowX} ${vars.glowY} ${vars.glowRadius} ${vars.glowSpread} ${glowColor};` : ''}
            color: ${textColor};

            &:focus {
                box-shadow: 0 0 0 3px ${getFocusGlowColor(focusGlowColor, context)};
            }

            &:hover:not([disabled]) {
                ${context !== 'gradient' ? `background: ${hoverBgColor};` : ''}
                ${props.color ? `color: ${hoverTextColor}` : ''}
            }

            &:active:not([disabled]) {
                ${context !== 'gradient' ? `background: ${getActiveColor(userBgColor || color, context)};` : ''}
            }
        }
    `;
};

export default colorModifier;