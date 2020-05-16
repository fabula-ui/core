import bgColor from '../../../methods/color/bgColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.card;
    const {colors} = vars;
    const color = colors[props.color];

    return `
        .fab-card-image {
            background-color: ${colors['placeholderImageColor']};
            ${color ? `background-color: ${bgColor(color, 'fill')};` : ''}
        }
    `;
}

export default colorModifier;