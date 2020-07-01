import getComponentVars from '../../../styles/methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/checkbox-color.modifier';
import sizeModifier from './modifiers/checkbox-size.modifier';

// Assets
const checkIcon = require('../../../icons/check.svg');
const minusIcon = require('../../../icons/minus.svg');

const CheckboxStyles = params => {
    const { framework, props } = params;
    const { rounded } = props;
    const vars = getComponentVars('checkbox');
    const wrapper = framework === 'angular' ? '.fab-checkbox-wrapper' : '&';

    return `        
        ${wrapper} {
            align-items: center;
            cursor: pointer;
            display: flex;
            font-family: ${vars.fontFamily};
            user-select: none;
        }

        ${wrapper}[data-checked='true'] .fab-icon {
            opacity: 1;
            visibility: visible;
        }

        ${wrapper}[data-checked='true'] .fab-checkbox:before {
            opacity: 1;
            visibility: visible;
        }

        ${wrapper}[data-disabled='true'] {
            cursor: default;
            opacity: ${vars.disabledOpacity};
        }

        ${wrapper}[data-focus='true'] {
            box-shadow: 0 2px 2px 2px rgba(0,0,0,.2);
        }

        ${wrapper}[data-indeterminate='true'] .fab-checkbox:before {
            mask-image: url('${minusIcon}');
            opacity: 1;
            visibility: visible;
        }

        ${wrapper} input[type='checkbox'] {
            display: none;
        }

        .fab-checkbox {
            align-items: center;
            border-radius: ${rounded ? '50%' : vars.borderRadius};
            display: flex;
            font-size: 1em;
            height: ${vars.size};
            justify-content: center;
            width: ${vars.size};

            &:before {
                content: '';
                display: block;
                height: 80%;
                mask-image: url('${checkIcon}');
                mask-repeat: no-repeat;
                mask-position: center center;
                mask-size: contain;
                position: relative;
                opacity: 0;
                transition: all .2s ease-in-out;
                visibility: hidden;
                width: 80%;
            }
        }

        .fab-checkbox__label {
            cursor: inherit;
            font-size: ${vars.fontSize};
            font-weight: ${props.weight ? props.weight : '400'};
            padding-left: .5em;
            
        }

        ${colorModifier(params)}
        ${sizeModifier(params)}
    `;
}

export default CheckboxStyles;