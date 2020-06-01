import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import glowColor from '../../../methods/color/glowColor';

const glowModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.badge;
    const { colors } = vars;
    const baseColor = vars.color;
    const userColor = props.color;
    const colorName = getColor(userColor || baseColor, colors);
    const context = getContext(props);

    return `
        .fab-button {
            box-shadow: 0 2px 2px ${glowColor(colorName, context)};
        }
    `;
}

export default glowModifier;