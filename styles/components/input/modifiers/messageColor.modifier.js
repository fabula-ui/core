import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getTextColor from '../../../methods/color/getTextColor';

const messageColorModifier = params => {
    const { props } = params;
    const vars = getComponentVars('input');
    const color = getColor(props.messageColor || props.message.color, vars.colors);

    return `
        .fab-input__message {
            color: ${getTextColor(color, 'clear')};
        }
    `;
}

export default messageColorModifier;