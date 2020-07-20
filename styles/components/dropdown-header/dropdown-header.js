import getBgColor from '../../methods/color/getBgColor';
import getColor from '../../methods/color/getColor';
import getComponentVars from '../../methods/misc/getComponentVars';
import getTextColor from '../../methods/color/getTextColor';

const DropdownHeaderStyles = params => {
    const {framework, props} = params;
    const vars = getComponentVars('dropdownHeader');
    const color = (props.color || props.parentColor) && getColor(props.color || props.parentColor, vars.colors);
    const textColor = props.color || props.parentColor ? getTextColor(color, 'fill') : props.textColor || vars.textColor; 
    const wrapper = framework === 'angular' ? '.fab-dropdown-header' : '&';

    return `
        ${wrapper} {
            align-items: center;
            color: ${textColor};
            display: flex;
            font-size: ${vars.fontSize};
            font-weight: ${vars.fontWeight};
            letter-spacing: ${vars.letterSpacing};
            margin-bottom: ${vars.paddingY};
            ${(props.color || props.parentColor) ? `opacity: ${vars.opacity};` : ''}
            padding: ${vars.paddingY} 0 ${vars.paddingY} ${vars.paddingX};
            width: 100%;
        }
    `
}

export default DropdownHeaderStyles;