import componentCommons from '../../common/component.commons';
import getComponentVars from '../../../styles/methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import sizeModifier from './modifiers/size.modifier';


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

        ${wrapper}[data-checked='true'] .fab-icon[data-name='check'] {
            opacity: 1;
            visibility: visible;
        }

        ${wrapper}[data-disabled='true'] {
            cursor: default;
            opacity: .4;
        }

        ${wrapper}[data-focus='true'] {
            box-shadow: 0 2px 2px 2px rgba(0,0,0,.2);
        }

        ${wrapper}[data-indeterminate='true'] .fab-icon[data-name='minus'] {
            opacity: 1;
            visibility: visible;
        }

        ${wrapper} input[type='checkbox'] {
            display: none;
        }

        .fab-checkbox {
            align-items: center;
            border-radius: ${rounded ? '50%' : '.2em'};
            display: flex;
            font-size: 1em;
            height: ${vars.size};
            justify-content: center;
            width: ${vars.size};
        }

        .fab-checkbox__label {
            cursor: inherit;
            font-size: ${vars.fontSize};
            font-weight: ${props.weight ? props.weight : '400'};
            padding-left: .5em;
            
        }

        // External
        .fab-icon {
            font-size: ${rounded ? '.7em' : '.8em'};
            opacity: 0;
            transition: all .2s ease-in-out;
            visibility: hidden;
        }

        ${colorModifier(params)}
        ${sizeModifier(params)}
    `;
}

export default CheckboxStyles;