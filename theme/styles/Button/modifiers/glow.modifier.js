import getContext from '../../../methods/misc/getContext';
import glowColor from '../../../methods/color/glowColor';

const glowModifier = props => {
    const theme = window.__FABTheme;
    const color = theme.variables.colors[props.color];
    const context = getContext(props);

    return `
        .fab-button {
            box-shadow: 0 2px 2px ${glowColor(color, context)};
        }
    `;
}

export default glowModifier;