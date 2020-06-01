import colorModifier from './modifiers/color.modifier';
import glowModifier from './modifiers/glow.modifier';

const CardStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.card;
    const { color, glow, padding } = props;
    const { borderRadius } = vars;
    const wrapper = framework === 'angular' ? '.fab-card-wrapper' : '&';

    return `
        .fab-card {
            border-radius: ${borderRadius};
            ${padding ? `padding: 1rem;` : ''}
        }

        .fab-card-body[data-padding='true'] {
            padding: 1rem;
        }
        
        ${colorModifier(params)}
        ${glow ? glowModifier(props) : ''}
    `;
}

export default CardStyles;