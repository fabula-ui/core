import colorModifier from './modifiers/color.modifier';
import glowModifier from './modifiers/glow.modifier';

const CardStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.card;
    const { color, glow } = props;
    const { borderRadius } = vars;

    return `
        .fab-card {
            border-radius: ${borderRadius};
        }
        
        ${colorModifier(props)}
        ${glow ? glowModifier(props) : ''}
    `;
}

export default CardStyles;