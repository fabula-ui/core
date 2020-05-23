import bgColor from '../../../methods/color/bgColor';
import borderColor from '../../../methods/color/borderColor';
import focusGlowColor from '../../../methods/color/focusGlowColor';

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

        .fab-input__field {
            border-color: ${borderColor(color, 'faded')};
        }

        .fab-input__field[disabled] {
            background-color: ${bgColor(color, 'disabled')};
        }
    `;
}

export default colorModifier;