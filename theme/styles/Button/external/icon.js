import getContext from '../../../methods/misc/getContext';
import getHoverTextColor from '../../../methods/color/hoverTextColor';
import getTextColor from '../../../methods/color/textColor';

const IconExternalStyles = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { color } = props;
    const { colors } = vars;
    const colorName = colors[color];
    const context = getContext(props);

    return `
        .fab-button .fab-icon[data-color='inherit'] {
            background-color: ${getTextColor(colorName, context)};
        }
        
        .fab-button:hover:not([disabled]) .fab-icon[data-color='inherit'] {
            color: ${getHoverTextColor(colorName, context)};
        }
    `;
}

export default IconExternalStyles;