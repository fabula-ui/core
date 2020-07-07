import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getGlowColor from '../../../methods/color/getGlowColor';

const glowModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const { colors } = vars;
    const color = getColor(props.color || vars.color, colors);
    const context = getContext(props);

    return `
        .fab-input {
            box-shadow: 0 2px 2px ${getGlowColor(color, context)};
        }
    `;
}

export default glowModifier;