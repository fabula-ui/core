import bgColor from '../../../methods/color/bgColor';
import borderColor from '../../../methods/color/borderColor';
import focusGlowColor from '../../../methods/color/focusGlowColor';
import placeholderColor from '../../../methods/color/placeholderColor';
import textColor from '../../../methods/color/textColor';

const hasModifier = params => {
    const { framework, props } = params;
    const { has } = props;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const { colors } = vars;
    const color = colors[has];
    const wrapper = framework === 'angular' ? '.fab-input-wrapper' : '&';

    return `
        .fab-input {
            background-color: ${bgColor(color, 'disabled')};
            border-color: ${borderColor(color, 'faded')};
            color: ${bgColor(color, 'fill')};

            input::placeholder {
                color: ${placeholderColor(color)};
            }
        }

        .fab-input[data-focus='true'] {
            &:before {
                border-color: ${focusGlowColor(color, 'faded')};
            }
        }

        ${wrapper} .fab-text {
            color: ${textColor(color, 'clear')};
        }
    `;
}

export default hasModifier;