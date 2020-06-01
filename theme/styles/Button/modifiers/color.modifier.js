import activeColor from '../../../methods/color/activeColor';
import bgColor from '../../../methods/color/bgColor';
import focusGlowColor from '../../../methods/color/focusGlowColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import hoverColor from '../../../methods/color/hoverColor';
import hoverTextColor from '../../../methods/color/hoverTextColor';
import textColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { colors } = vars;

    const baseColor = vars.color;
    const userColor = props.color;

    const colorName = getColor(userColor || baseColor, colors);
    const context = getContext(props);

    return `
        .fab-button {
            background: ${bgColor(colorName, context)};
            color: ${textColor(colorName, context)};

            &:before {
                border-color: ${focusGlowColor(colorName, context)};
            }

            &:hover:not([disabled]) {
                ${context !== 'gradient' ? `background: ${hoverColor(colorName, context)};` : ''}
                color: ${hoverTextColor(colorName, context)};
            }

            &:active:not([disabled]) {
                ${context !== 'gradient' ? `background: ${activeColor(colorName, context)};` : ''}
            }
        }
    `;
};

export default colorModifier;