import activeColor from '../../../methods/color/activeColor';
import bgColor from '../../../methods/color/bgColor';
import focusGlowColor from '../../../methods/color/focusGlowColor';
import getContext from '../../../methods/misc/getContext';
import hoverColor from '../../../methods/color/hoverColor';
import hoverTextColor from '../../../methods/color/hoverTextColor';
import textColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const color = vars.colors[props.color];
    const context = getContext(props);

    return `
        .fab-button {
            background: ${bgColor(color, context)};
            color: ${textColor(color, context)};

            &:before {
                border-color: ${focusGlowColor(color, context)};
            }

            &:hover:not([disabled]) {
                ${context !== 'gradient' ? `background: ${hoverColor(color, context)};` : ''}
                color: ${hoverTextColor(color, context)};
            }

            &:active:not([disabled]) {
                ${context !== 'gradient' ? `background: ${activeColor(color, context)};` : ''}
            }
        }
    `;
};

export default colorModifier;