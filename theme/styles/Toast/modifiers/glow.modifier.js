import getContext from '../../../methods/misc/getContext';
import getColor from '../../../methods/color/getColor';
import glowColor from '../../../methods/color/glowColor';

const glowModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.badge;
    const { color } = props;
    const { colors } = vars;

    const baseColor = getColor(vars.color, colors);
    const context = getContext(props);
    const userColor = getColor(props.color, colors);

    return `
        .fab-toast {
            box-shadow: 0 2px 2px ${glowColor(userColor || baseColor, context)};
        }
    `;
}

export default glowModifier;