import textColor from '../../../utils/colors/textColor';

const messageColorModifier = colorName => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const color = vars.colors[colorName];

    return `
        .fab-input__message {
            color: ${textColor(color, 'clear')};
        }
    `;
}

export default messageColorModifier;