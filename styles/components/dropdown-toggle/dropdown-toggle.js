// Modifiers
import colorModifier from './modifiers/dropdown-color.modifier';

// Assets
const chevronIcon = require('../../../icons/chevron-down.svg');

const DropdownToggleStyles = params => {
    const { props } = params;
    const icon = !!props.icon ? require(`../../../icons/${typeof props.icon === 'object' ? props.icon.name : props.icon}.svg`) : null;

    return `
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
        }

        .fab-dropdown-toggle__icon {
            mask-image: url('${icon}');
        }

        ${colorModifier(params)}
    `;
}

export default DropdownToggleStyles;