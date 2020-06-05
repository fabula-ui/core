import bgColor from '../../../methods/color/bgColor';
import borderColor from '../../../methods/color/borderColor';
import getFocusGlowColor from '../../../methods/color/focusGlowColor';
import getColor from '../../../methods/color/getColor';
import getPlaceholderColor from '../../../methods/color/placeholderColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const { colors } = vars;
    const color = getColor(props.color || vars.color, colors);
    const focusGlowColor = props.color ? color : vars.focusGlowColor;

    return `
        .fab-input {
            border-color: ${borderColor(color, 'faded')};
        }

        .fab-input[data-disabled='true'] {
            background-color: ${bgColor(color, 'disabled')};
        }

        .fab-input[data-focus='true'] {
            &:before {
                border-color: ${getFocusGlowColor(focusGlowColor, 'faded')};
            }
        }

        .fab-input__password-toggle {
            color: ${getPlaceholderColor(color, 'fill')};
        }
    `;
}

export default colorModifier;