import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/dropdown-item-color.modifier';
import sizeModifier from './modifiers/dropdown-item-size.modifier';

const DropdownItemStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('dropdownItem');
    const wrapper = framework === 'angular' ? '.fab-dropdown-item' : '&';

    return `
        ${wrapper} {
            font-size: ${vars.fontSize};
            font-weight: ${props.weight || vars.fontWeight};
            letter-spacing: ${vars.letterSpacing};
            transition: all ${vars.transition};
            white-space: nowrap;
            width: 100%;
        }

        button${wrapper} {
            appearance: none;
            background: none;
            border: none;
            border-radius: 0;
            cursor: pointer;
            padding: ${vars.paddingY} ${vars.paddingX};
            text-align: left;
            transition: all ${vars.transition};
            width: 100%;

            &:focus {
                outline: none;
            }
        }

        div${wrapper} {
            padding: ${vars.paddingY} ${vars.paddingX};
        }

        // Modifiers
        ${colorModifier(params)}
        ${sizeModifier(params)}
    `;
}

export default DropdownItemStyles;