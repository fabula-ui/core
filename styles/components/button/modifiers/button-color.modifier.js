import getActiveColor from '../../../methods/color/getActiveColor';
import getBgColor from '../../../methods/color/getBgColor';
import getBorderColor from '../../../methods/color/getBorderColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getFocusGlowColor from '../../../methods/color/getFocusGlowColor';
import getGlowColor from '../../../methods/color/getGlowColor';
import getHoverColor from '../../../methods/color/getHoverColor';
import getHoverTextColor from '../../../methods/color/getHoverTextColor';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
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
            background: ${userBgColor ? userBgColor : getBgColor(color, context)};
            ${(props.border || props.outline) ? `border: solid 1px ${getBorderColor(color, context === 'gradient' ? 'fill' : context)};` : ''}
            ${props.glow ? `box-shadow: ${vars.glowX} ${vars.glowY} ${vars.glowRadius} ${vars.glowSpread} ${getGlowColor(color, context)};` : ''}
            color: ${userTextColor ? userTextColor : getTextColor(userBgColor || color, context)};

            &:focus {
                box-shadow: 0 0 0 3px ${getFocusGlowColor(focusGlowColor, context)};
            }

            &:hover:not([disabled]) {
                ${context !== 'gradient' ? `background: ${getHoverColor(userBgColor || color, context)};` : ''}
                ${props.bgColor || props.color ? `color: ${getHoverTextColor(userBgColor || color, context)}` : ''}
                ${props.userTextColor ? `color: ${getHoverTextColor(userTextColor, 'invert')};` : ''}
            }

            &:active:not([disabled]) {
                ${context !== 'gradient' ? `background: ${getActiveColor(userBgColor || color, context)};` : ''}
            }
        }
    `;
};

export default colorModifier;