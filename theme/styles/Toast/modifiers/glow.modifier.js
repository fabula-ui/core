import getContext from '../../../methods/misc/getContext';
import getColorName from '../../../methods/color/getColor';
import glowColor from '../../../methods/color/glowColor';

const glowModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.badge;
    const { color } = props;
    const { colors } = vars;
    const colorName = getColorName(color, colors);
    const context = getContext(props);

    return `
        .fab-toast {
            box-shadow: 0 2px 2px ${glowColor(colorName, context)};
        }
    `;
}

export default glowModifier;