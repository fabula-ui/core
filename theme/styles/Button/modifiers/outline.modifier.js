import borderColor from '../../../methods/color/borderColor';
import hoverColor from '../../../methods/color/hoverColor';

const outlineModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const color = vars.colors[props.color];
    const { borderWidth, focusGlowRadius } = vars;

    return `
    .fab-button {
        background: none;
        border: solid ${borderWidth}px;
        ${props.color ? `border-color: ${borderColor(color, 'outline')};` : ''}

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