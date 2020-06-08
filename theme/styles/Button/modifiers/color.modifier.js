import activeColor from '../../../methods/color/activeColor';
import getBgColor from '../../../methods/color/bgColor';
import focusGlowColor from '../../../methods/color/focusGlowColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import hoverColor from '../../../methods/color/hoverColor';
import hoverTextColor from '../../../methods/color/hoverTextColor';
import getTextColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { colors } = vars;

    const baseBgColor = getColor(vars.color, colors);
    const context = getContext(props);
    const textColor = getColor(props.textColor || vars.textColor, colors);
    const userBgColor = getColor(props.color, colors);

    return `
        .fab-button {
            background: ${getBgColor(userBgColor || baseBgColor, context)};
            color: ${props.color ? `${getTextColor(userBgColor, context)}` : `${textColor}`};

            &:before {
                border-color: ${focusGlowColor(userBgColor || baseBgColor, context)};
            }

            &:hover:not([disabled]) {
                ${context !== 'gradient' ? `background: ${hoverColor(userBgColor || baseBgColor, context)};` : ''}
                color: ${hoverTextColor(textColor, context)};
                color: ${props.color ? `${hoverTextColor(userBgColor, context)}` : textColor};
            }

            &:active:not([disabled]) {
                ${context !== 'gradient' ? `background: ${activeColor(userBgColor || baseBgColor, context)};` : ''}
            }
        }
    `;
};

export default colorModifier;