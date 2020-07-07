import getColor from '../../../methods/color/getColor';
import getTextColor from '../../../methods/color/getTextColor';

const messageColorModifier = params => {
    const { framework, props } = params;
    const { messageColor } = props;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const color = getColor(messageColor, vars.colors);
    const wrapper = framework === 'angular' ? '.fab-input-wrapper' : '&';

    return `
        ${wrapper} .fab-text {
            color: ${textColor(color, 'clear')};
        }
    `;
}

export default messageColorModifier;