import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import glowColor from '../../../methods/color/glowColor';

const glowModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { colors } = vars;
    const colorName = getColor(props.color || vars.color, colors);
    const context = getContext(props);

    return `
        .fab-button {
            box-shadow: 0 2px 2px ${glowColor(colorName, context)};
        }
    `;
}

export default glowModifier;