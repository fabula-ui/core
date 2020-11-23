// Modifiers
import colorModifier from './modifiers/dropdown-color.modifier';

// Assets
const chevronIcon = require('../../../icons/raw/chevron-down.svg');

const DropdownToggleStyles = params => {
    const { framework, props } = params;
    const wrapper = framework === 'angular' ? '.fab-dropdown-toggle' : '&';

    return `
        &,
        ${wrapper} {
            ${props.expand ? `width: 100%;` : ''}
        }

        ${wrapper}[data-direction='down'] {
            &[data-open='true'] .fab-dropdown-toggle__chevron .fab-icon {
                transform: rotateZ(180deg);
            }

            .fab-dropdown-toggle__chevron .fab-icon {
                transform: rotateZ(0);
            }
        }

        ${wrapper}[data-direction='up'] {
            &[data-open='true'] .fab-dropdown-toggle__chevron .fab-icon {
                transform: rotateZ(0);
            }

            .fab-dropdown-toggle__chevron .fab-icon {
                transform: rotateZ(180deg);
            }
        }

        .fab-dropdown-toggle__chevron {
            display: inline-block;
            ${!props.arrow ? `display: none;` : ''}
            flex-shrink: 0;
            line-height: .5;
            vertical-align: middle;
        }

        .fab-dropdown-toggle__chevron:not(:only-child):not([data-only-child='true']) {
            margin-left: .5em;
        }

        .fab-dropdown-toggle__label {
            display: inline-block;
        }

        .fab-dropdown-toggle__label:empty {
            display: none;
        }

        .fab-dropdown-toggle__label > * {
            vertical-align: middle;
        }

        // External
        .fab-button-wrapper {
            width: 100%;
        }

        .fab-icon {
            transition: all .2s ease-in-out;
        }

        // Modifiers
        ${colorModifier(params)}
    `;
}

export default DropdownToggleStyles;