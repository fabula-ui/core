import activeColor from '../../../methods/color/activeColor';
import getBgColor from '../../../methods/color/bgColor';
import getBorderColor from '../../../methods/color/borderColor';
import focusColor from '../../../methods/color/focusColor';
import focusGlowColor from '../../../methods/color/focusGlowColor';
import getColor from '../../../methods/color/getColor';
import getGlowColor from '../../../methods/color/glowColor';
import getContext from '../../../methods/misc/getContext';
import hoverColor from '../../../methods/color/hoverColor';
import hoverTextColor from '../../../methods/color/hoverTextColor';
import getTextColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tag;
    const { glow, outline } = props;
    const { colors } = vars;
    const color = getColor(props.color, colors);
    const context = getContext(props);

    let bgColor = getBgColor(color || vars.color, context);
    let borderColor = getBorderColor(color || vars.color, context);
    let glowColor = getGlowColor(color || vars.color, context);
    let textColor = getTextColor(color || vars.color, context);

    return `
        .fab-tag {
            background-color: ${bgColor};
            ${outline ? `border: solid 1px ${borderColor};` : ''}
            ${glow ? `box-shadow: 0 1px 2px ${glowColor};` : ''}
            color: ${textColor};
        }

        .fab-tag > a,
        .fab-tag > button {
            &:before {
                border-color: ${focusGlowColor(color, context)};
            }

            &:hover:not([disabled]) {
                ${context !== 'gradient' ? `background-color: ${hoverColor(color, context)};` : ''}
                color: ${hoverTextColor(color, context)};
            }

            &:active:not([disabled]) {
                ${context !== 'gradient' ? `background-color: ${activeColor(color, context)};` : ''}
            }
        }
    `
}

export default colorModifier;