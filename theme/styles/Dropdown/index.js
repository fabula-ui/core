// Component commons
import { componentCommons } from '../../utils/component.utils';

const DropdownStyles = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.dropdown;
    const { borderRadius } = vars;

    return `
    .fab-dropdown { ${componentCommons} }
    .fab-dropdown {
        position: relative;
    }

    .fab-dropdown[data-open='true'] {
        .fab-dropdown__menu {
            opacity: 1;
            transform: translate(0, 0);
            visibility: visible;
        }
    }
    .fab-dropdown__menu {
        background: #FFF;
        border-radius: ${borderRadius};
        box-shadow: 0 1px 3px rgba(0,0,0,.2);
        left: 0;
        margin-top: 5px;
        min-width: 100%;
        opacity: 0;
        position: absolute;
        top: 100%;
        transition: all .2s ease-in-out;
        transform: translate(0, -10px);
        visibility: hidden;
        z-index: 9999;
    }

    .fab-dropdown__menu .fab-text {
        white-space: nowrap;
    }
    `
};

export default DropdownStyles;