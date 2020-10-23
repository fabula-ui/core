import getComponentVars from '../../../styles/methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/checkbox-color.modifier';
import sizeModifier from './modifiers/checkbox-size.modifier';

// Assets
const checkIcon = require('../../../icons/raw/check.svg');
const minusIcon = require('../../../icons/raw/minus.svg');

const CheckboxStyles = params => {
    const { props } = params;
    const vars = getComponentVars('checkbox');

    return `        
        .fab-checkbox {
            align-items: flex-start;
            cursor: pointer;
            display: flex;
            font-family: ${vars.fontFamily};
            user-select: none;
        }

        .fab-checkbox[data-checked='true'] {
            .fab-checkbox__square:before,
            .fab-icon {
                opacity: 1;
                visibility: visible;
            }
        }

        .fab-checkbox[data-disabled='true'] {
            cursor: default;
            opacity: ${vars.disabledOpacity};
            pointer-events: none;
        }

        .fab-checkbox[data-focus='true'] {
            box-shadow: 0 2px 2px 2px rgba(0,0,0,.2);
        }

        .fab-checkbox[data-indeterminate='true'] .fab-checkbox__square:before {
            mask-image: url('${minusIcon}');
            opacity: 1;
            visibility: visible;
        }

        .fab-checkbox[data-read-only='true'] {
            cursor: default;
            pointer-events: none;
        }

        .fab-checkbox input[type='checkbox'] {
            display: none;
        }

        .fab-checkbox__square {
            align-items: center;
            border-radius: ${vars.borderRadius};
            display: flex;
            flex-shrink: 0;
            font-size: 1em;
            height: ${vars.size};
            justify-content: center;
            position: relative;
            top: .075em;
            transition: ${vars.transition};
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
                transition: ${vars.transition};
                visibility: hidden;
                width: 80%;
            }
        }

        .fab-checkbox__label {
            cursor: inherit;
            font-size: ${vars.fontSize};
            font-weight: ${props.weight ? props.weight : '400'};
            padding-left: ${vars.spacing};
        }

        // Modifiers
        ${colorModifier(params)}
        ${sizeModifier(params)}
    `;
}

export default CheckboxStyles;