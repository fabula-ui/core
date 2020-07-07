import getColor from '../../../methods/color/getColor';
import getTextColor from '../../../methods/color/getTextColor';

const messageColorModifier = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const color = getColor(props.messageColor || props.message.color, vars.colors);

    return `
        .fab-input__message {
            color: ${getTextColor(color, 'clear')};
        }
    `;
}

export default messageColorModifier;