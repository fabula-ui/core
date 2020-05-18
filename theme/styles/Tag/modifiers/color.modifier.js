import activeColor from '../../../methods/color/activeColor';
import bgColor from '../../../methods/color/bgColor';
import focusColor from '../../../methods/color/focusColor';
import focusGlowColor from '../../../methods/color/focusGlowColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import hoverColor from '../../../methods/color/hoverColor';
import hoverTextColor from '../../../methods/color/hoverTextColor';
import textColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tag;
    const { colors } = vars;
    const color = getColor(props.color, colors) || colors['aux'];
    const context = getContext(props);

    return `
        .fab-tag {
            background-color: ${bgColor(color, context)};
            color: ${textColor(color, context)};
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