import bgColor from '../../../utils/colors/bgColor';
import borderColor from '../../../utils/colors/borderColor';
import focusGlowColor from '../../../utils/colors/focusGlowColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const { colors } = vars;
    const color = colors[props.color];

    return `
        .fab-input[data-focus='true'] {
            &:before {
                border-color: ${focusGlowColor(color, 'faded')};
            }
        }
        .fab-input input {
            border-color: ${borderColor(color, 'faded')};
        }
        .fab-input input[disabled] {
            background-color: ${bgColor(color, 'disabled')};
        }
    `;
}

export default colorModifier;