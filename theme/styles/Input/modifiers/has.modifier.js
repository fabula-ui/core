import bgColor from '../../../methods/color/bgColor';
import borderColor from '../../../methods/color/borderColor';
import focusGlowColor from '../../../methods/color/focusGlowColor';
import placeholderColor from '../../../methods/color/placeholderColor';
import textColor from '../../../methods/color/textColor';

const hasModifier = has => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const { colors } = vars;
    const color = colors[has];

    return `
        .fab-input[data-focus='true'] {
            &:before {
                border-color: ${focusGlowColor(color, 'faded')};
            }
        }

        .fab-input__field {
            background-color: ${bgColor(color, 'disabled')};
            border-color: ${borderColor(color, 'faded')};

            &::placeholder {
                color: ${placeholderColor(color)};
            }
        }

        .fab-input__message {
            color: ${textColor(color, 'clear')};
        }
    `;
}

export default hasModifier;