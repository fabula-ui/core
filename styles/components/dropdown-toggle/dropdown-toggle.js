// Modifiers
import colorModifier from './modifiers/dropdown-color.modifier';

// Assets
const chevronIcon = require('../../../icons/raw/chevron-down.svg');

const DropdownToggleStyles = params => {
    const { framework, props } = params;
    const wrapper = framework === 'angular' ? '.fab-dropdown-toggle' : '&';

    return `
        ${wrapper} {
            ${props.expand ? `width: 100%;` : ''}
        }

        ${wrapper}[data-direction='down'] {
            &[data-open='true'] .fab-dropdown-toggle__chevron {
                transform: rotateZ(180deg);
            }

            .fab-dropdown-toggle__chevron {
                transform: rotateZ(0);
            }
        }

        ${wrapper}[data-direction='up'] {
            &[data-open='true'] .fab-dropdown-toggle__chevron {
                transform: rotateZ(0);
            }

            .fab-dropdown-toggle__chevron {
                transform: rotateZ(180deg);
            }
        }


        .fab-dropdown-toggle__chevron {
            flex-shrink: 0;
            height: 1em;
            mask-repeat: no-repeat;
            mask-position: center center;
            mask-size: contain;
            width: 1em;
        }

        .fab-dropdown-toggle__chevron {
            mask-image: url('${chevronIcon}');
            transition: all .2s ease-in-out;
        }

        // External
        .fab-button-wrapper {
            width: 100%;
        }

        ${colorModifier(params)}
    `;
}

export default DropdownToggleStyles;