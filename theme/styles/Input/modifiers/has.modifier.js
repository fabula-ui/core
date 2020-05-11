import bgColor from '../../../utils/colors/bgColor';
import borderColor from '../../../utils/colors/borderColor';
import focusGlowColor from '../../../utils/colors/focusGlowColor';
import placeholderColor from '../../../utils/colors/placeholderColor';
import textColor from '../../../utils/colors/textColor';

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

        .fab-input input {
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