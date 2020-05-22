import getContext from '../../../methods/misc/getContext';
import getGlowColor from '../../../methods/color/glowColor';

const glowModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.modal;
    const { color } = props; 
    const { colors } = vars;

    const colorName = colors[color];
    const context = getContext(props);

    return `
        .fab-modal {
            box-shadow: 0 2px 2px ${getGlowColor(colorName, context)};
        }
    `;
}

export default glowModifier;