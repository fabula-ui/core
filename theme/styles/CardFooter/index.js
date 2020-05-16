import colorModifier from './modifiers/color.modifier';

const CardFooterStyles = params => {
    const { props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.card;
    const { padding } = props;
    const { borderRadius } = vars;

    return `
        .fab-card-footer {
            ${padding ? `padding: 1rem;` : ''}
        }

        ${colorModifier(props)}
    `
}

export default CardFooterStyles;