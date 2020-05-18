import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import glowColor from '../../../methods/color/glowColor';

const glowModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const { colors } = vars;
    const color = getColor(props.color, colors);
    const context = getContext(props);

    return `
        .fab-input input {
            box-shadow: 0 2px 2px ${glowColor(color, context)};
        }
    `;
}

export default glowModifier;