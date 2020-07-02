// Modifiers
import colorModifier from './modifiers/dropdown-color.modifier';

// Assets
const chevronIcon = require('../../../icons/chevron-down.svg');

const DropdownToggleStyles = params => {
    const { props } = params;
    const icon = !!props.icon ? require(`../../../icons/${typeof props.icon === 'object' ? props.icon.name : props.icon}.svg`) : null;

    return `
        .fab-button-wrapper {
            width: 100%;
        }

        .fab-dropdown-toggle__chevron,
        .fab-dropdown-toggle__icon {
            height: 1em;
            mask-repeat: no-repeat;
            mask-position: center center;
            mask-size: contain;
            width: 1em;
        }

        .fab-dropdown-toggle__chevron {
            mask-image: url('${chevronIcon}');
            ${props.direction === 'down' ? `transform: ${props.open ? `rotateZ(180deg)` : `rotateZ(0)`};` : ''}
            ${props.direction === 'up' ? `transform: ${props.open ? `rotateZ(0)` : `rotateZ(180deg)`};` : ''}
        }

        .fab-dropdown-toggle__icon {
            mask-image: url('${icon}');
        }

        ${colorModifier(params)}
    `;
}

export default DropdownToggleStyles;