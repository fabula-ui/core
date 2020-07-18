import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('icon');
    const color = props.parentProps.color || props.parentProps.clear ? getColor(props.parentProps.color, vars.colors) : vars.color;
    const context = props.parentProps.color || props.parentProps.clear ? getContext(props.parentProps) : 'fill';
    const wrapper = framework === 'angular' ? '.fab-inner-icon' : '&';

    // Icon color
    const iconColor = props.icon.color ? getColor(props.icon.color, vars.colors) : null;

    // User defined colors
    const userBgColor = props.parentProps.bgColor ? getColor(props.parentProps.bgColor, vars.colors) : null;
    const userTextColor = props.parentProps.textColor ? getColor(props.parentProps.textColor, vars.colors) : null;

    return `
        ${wrapper} {
            ${!props.parentProps.color && !iconColor ? `background: ${vars.color};` : ''}
            ${props.parentProps.color && !iconColor ? `background: ${userTextColor ? userTextColor : getTextColor(userBgColor || color, context)};` : ''}
            ${iconColor ? `background: ${iconColor};` : ''}
        }
    `;
};

export default colorModifier;