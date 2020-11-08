import getActiveColor from '../../../methods/color/getActiveColor';
import getBgColor from '../../../methods/color/getBgColor';
import getBorderColor from '../../../methods/color/getBorderColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getFocusColor from '../../../methods/color/getFocusColor';
import getColor from '../../../methods/color/getColor';
import getGlowColor from '../../../methods/color/getGlowColor';
import getContext from '../../../methods/misc/getContext';
import getHoverColor from '../../../methods/color/getHoverColor';
import getHoverTextColor from '../../../methods/color/getHoverTextColor';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('tag');
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';
    const bgColor = getBgColor(color || vars.color, context);
    const borderColor = getBorderColor(color || vars.color, context);
    const glowColor = getGlowColor(color || vars.color, context);
    const textColor = getTextColor(color || vars.color, context);
    const wrapper = framework === 'angular' ? '.fab-tag' : '&'

    return `
        ${wrapper},
        a${wrapper},
        button${wrapper} {
            background-color: ${bgColor};
            ${props.outline ? `border: solid ${vars.borderWidth} ${borderColor};` : ''}
            ${props.glow ? `box-shadow: ${vars.glowX} ${vars.glowY} ${vars.glowRadius} ${vars.glowSpread} ${glowColor};` : ''}
            color: ${textColor};
        }

        a${wrapper},
        button${wrapper} {
            &:before {
                border-color: ${getFocusColor(color, context)};
            }

            &:hover:not([disabled]) {
                ${context !== 'gradient' ? `background-color: ${getHoverColor(color, context)};` : ''}
                color: ${getHoverTextColor(color, context)};
            }

            &:active:not([disabled]) {
                ${context !== 'gradient' ? `background-color: ${getActiveColor(color, context)};` : ''}
            }
        }
    `
}

export default colorModifier;