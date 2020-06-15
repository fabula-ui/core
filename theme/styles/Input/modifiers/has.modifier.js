import bgColor from '../../../methods/color/bgColor';
import borderColor from '../../../methods/color/borderColor';
import getFocusGlowColor from '../../../methods/color/focusGlowColor';
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
            border-color: ${getFocusGlowColor(color, 'fill')};
            box-shadow: 0 0 0 ${vars.focusGlowRadius} ${getFocusGlowColor(color, 'faded')};
        }

        ${wrapper} .fab-text {
            color: ${textColor(color, 'clear')};
        }
    `;
}

export default hasModifier;