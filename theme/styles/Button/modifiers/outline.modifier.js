import hoverColor from '../../../methods/color/hoverColor';
import textColor from '../../../methods/color/textColor';

const outlineModifier = colorName => {
    const theme = window.__FABTheme;
    const color = theme.variables.colors[colorName];
    const vars = theme.variables.components.button;
    const { borderWidth, focusGlowRadius } = vars;

    return `
    .fab-button {
        border: solid ${borderWidth}px;
        border-color: ${textColor(color)};

        &:focus:before {
            border-width: ${focusGlowRadius + borderWidth}px;
            bottom: ${-focusGlowRadius - borderWidth}px;
            left: ${-focusGlowRadius - borderWidth}px;
            right: ${-focusGlowRadius - borderWidth}px;
            top: ${-focusGlowRadius - borderWidth}px;
        }

        &:hover:not([disabled]) {
            border-color: ${hoverColor(color, 'outline')};
        }
    }
    `
}

export default outlineModifier;