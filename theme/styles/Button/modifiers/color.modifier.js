import activeColor from '../../../methods/color/activeColor';
import getBgColor from '../../../methods/color/bgColor';
import getBorderColor from '../../../methods/color/borderColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getFocusGlowColor from '../../../methods/color/focusGlowColor';
import getGlowColor from '../../../methods/color/glowColor';
import hoverColor from '../../../methods/color/hoverColor';
import hoverTextColor from '../../../methods/color/hoverTextColor';
import getTextColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const vars = getComponentVars('button');
    const color = props.color || props.clear ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color || props.clear ? getContext(props) : 'fill';
    const focusGlowColor = !!props.focusGlowColor && getColor(props.focusGlowColor) || props.color ? color : vars.focusGlowColor;

    // User defined colors
    const userBgColor = props.bgColor ? getColor(props.bgColor, vars.colors) : null;
    const userTextColor = props.textColor ? getColor(props.textColor, vars.colors) : null;

    return `
        .fab-button {
            background: ${userBgColor ? userBgColor : getBgColor(color, context)};
            ${props.border || props.outline ? `border: solid 1px ${getBorderColor(color, context === 'gradient' ? 'fill' : context)};` : ''}
            ${props.glow ? `box-shadow: ${vars.glowX} ${vars.glowY} ${vars.glowRadius} ${vars.glowSpread} ${getGlowColor(color, context)};` : ''}
            color: ${userTextColor ? userTextColor : getTextColor(userBgColor || color, context)};

            &:focus {
                box-shadow: 0 0 0 3px ${getFocusGlowColor(focusGlowColor, context)};
            }

            &:hover:not([disabled]) {
                ${context !== 'gradient' ? `background: ${hoverColor(userBgColor || color, context)};` : ''}
                ${props.bgColor || props.color ? `color: ${hoverTextColor(userBgColor || color, context)}` : ''}
                ${props.userTextColor ? `color: ${hoverTextColor(userTextColor, 'invert')};` : ''}
            }

            &:active:not([disabled]) {
                ${context !== 'gradient' ? `background: ${activeColor(userBgColor || color, context)};` : ''}
            }
        }
    `;
};

export default colorModifier;