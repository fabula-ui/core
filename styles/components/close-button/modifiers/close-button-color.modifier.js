import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('closeButton');
    const color = props.color || props.parentColor ? getColor(props.color || props.parentColor, vars.colors) : vars.color;
    const hoverColor = props.color || props.parentColor ? getTextColor(color, 'fill') : vars.hoverColor;
    const wrapper = framework === 'angular' ? '.fab-close-button' : '&';

    return `
        ${wrapper} {
            background: ${getBgColor(color, props.color || props.parentColor ? 'adapt' : 'fill')};
            color: ${getTextColor(color, 'fill')};

            &:hover {
                background-color: ${hoverColor};
                color: ${props.color || props.parentColor ? getBgColor(color, 'fill') : getTextColor(hoverColor, 'fill')};
            }
        }
    `;
}

export default colorModifier;