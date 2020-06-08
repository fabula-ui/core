import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';

const CheckboxStyles = params => {
    const { framework, props } = params;
    const { rounded } = props;
    const wrapper = framework === 'angular' ? '.fab-checkbox-wrapper' : '&';

    return `
        ${wrapper} { ${componentCommons} }
        
        ${wrapper} {
            align-items: center;
            cursor: pointer;
            display: flex;
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
            font-size: 1.1em;
            height: 1em;
            justify-content: center;
            margin-right: .5em;
            width: 1em;
        }

        .fab-checkbox__label {
            cursor: inherit;
        }

        // External
        .fab-icon {
            font-size: ${rounded ? '.7em' : '.8em'};
            opacity: 0;
            transition: all .2s ease-in-out;
            visibility: hidden;
        }

        ${colorModifier(params)}
    `;
}

export default CheckboxStyles;