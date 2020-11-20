import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/dropdown-header-color.modifier';

const DropdownHeaderStyles = params => {
    const {framework, props} = params;
    const vars = getComponentVars('dropdownHeader');
    const wrapper = framework === 'angular' ? '.fab-dropdown-header' : '&';

    return `
        & {
            display: block;
            margin-bottom: ${vars.paddingY};
        }

        ${wrapper} {
            align-items: center;
            font-size: ${vars.fontSize};
            font-weight: ${vars.fontWeight};
            letter-spacing: ${vars.letterSpacing};
            ${(props.color || props.parentColor) ? `opacity: ${vars.opacity};` : ''}
            padding: ${vars.paddingY} ${vars.paddingX};
            width: 100%;

            > * {
                vertical-align: middle;
            }
        }

        ${colorModifier(params)}
    `
}

export default DropdownHeaderStyles;