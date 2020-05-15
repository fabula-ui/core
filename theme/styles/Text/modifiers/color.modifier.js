const colorModifier = colorName => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.text;
    const { colors } = vars;
    const color = colorName === 'inherit' ? 'inherit' : colors[colorName];

    return `
        .fab-text {
            color: ${color};
        }

        ${colorName === 'inherit' ?
            `.fab-text[data-aux='true'] {
                opacity: .8;
            }` : ''
        }
    `;
}

export default colorModifier;