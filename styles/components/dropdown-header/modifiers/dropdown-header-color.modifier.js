import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('dropdownHeader');
    const color = (props.color || props.parentColor) && getColor(props.color || props.parentColor, vars.colors);
    const bgColor = props.color ? getBgColor(color, 'fill') : vars.color;
    const wrapper = framework === 'angular' ? '.fab-dropdown-header' : '&';

    let textColor = (props.color || props.parentColor) ? getTextColor(color, 'fill') : vars.textColor;

    if (props.textColor) {
        textColor = getColor(props.textColor, vars.colors);
    }

    return `
        ${wrapper} {
            ${props.color ? `background-color: ${bgColor};` : ''}
            color: ${textColor};
        }
    `;
}

export default colorModifier;