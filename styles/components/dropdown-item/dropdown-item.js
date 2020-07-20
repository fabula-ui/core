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

        ${wrapper}[data-button='false'] {
            padding: ${vars.paddingY} ${vars.paddingX};
        }

        .fab-dropdown-item__button {
            appearance: none;
            background: none;
            border: none;
            border-radius: 0;
            cursor: pointer;
            font-size: 1em;
            font-weight: inherit;
            letter-spacing: inherit;
            padding: ${vars.paddingY} ${vars.paddingX};
            text-align: left;
            transition: all ${vars.transition};
            width: 100%;

            &:focus {
                outline: none;
            }
        }

        // Modifiers
        ${colorModifier(params)}
        ${sizeModifier(params)}
    `;
}

export default DropdownItemStyles;