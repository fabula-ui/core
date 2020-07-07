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

const colorModifier = props => {
    const vars = getComponentVars('tag');
    const color = getColor(props.color, vars.colors);
    const context = getContext(props);

    let bgColor = getBgColor(color || vars.color, context);
    let borderColor = getBorderColor(color || vars.color, context);
    let glowColor = getGlowColor(color || vars.color, context);
    let textColor = getTextColor(color || vars.color, context);

    return `
        .fab-tag {
            background-color: ${bgColor};
            ${props.outline ? `border: solid 1px ${borderColor};` : ''}
            ${props.glow ? `box-shadow: 0 1px 2px ${glowColor};` : ''}
            color: ${textColor};
        }

        .fab-tag > a,
        .fab-tag > button {
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