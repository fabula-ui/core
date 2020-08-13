import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/dropdown-header-color.modifier';

const DropdownHeaderStyles = params => {
    const {framework, props} = params;
    const vars = getComponentVars('dropdownHeader');
    const wrapper = framework === 'angular' ? '.fab-dropdown-header' : '&';

    return `
        ${wrapper} {
            align-items: center;
            display: flex;
            font-size: ${vars.fontSize};
            font-weight: ${vars.fontWeight};
            letter-spacing: ${vars.letterSpacing};
            margin-bottom: ${vars.paddingY};
            ${(props.color || props.parentColor) ? `opacity: ${vars.opacity};` : ''}
            padding: ${vars.paddingY} 0 ${vars.paddingY} ${vars.paddingX};
            width: 100%;
        }

        ${colorModifier(params)}
    `
}

export default DropdownHeaderStyles;