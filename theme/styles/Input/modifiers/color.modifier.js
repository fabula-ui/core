import bgColor from '../../../methods/color/bgColor';
import borderColor from '../../../methods/color/borderColor';
import getContext from '../../../methods/misc/getContext';
import getFocusGlowColor from '../../../methods/color/focusGlowColor';
import getColor from '../../../methods/color/getColor';
import getPlaceholderColor from '../../../methods/color/placeholderColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const color = props.color || props.clear ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color || props.clear ? getContext(props) : 'fill';
    const focusGlowColor = props.color ? color : vars.focusGlowColor;

    return `
        .fab-input {
            border-color: ${borderColor(color, 'faded')};
        }

        .fab-input[data-disabled='true'] {
            background-color: ${bgColor(color, 'disabled')};
        }

        .fab-input[data-focus='true'] {
            border-color: ${getFocusGlowColor(focusGlowColor, 'fill')};
            box-shadow: 0 0 0 ${vars.focusGlowRadius} ${getFocusGlowColor(focusGlowColor, 'faded')};
        }

        .fab-input__password-toggle {
            color: ${getPlaceholderColor(color, 'fill')};
        }
    `;
}

export default colorModifier;