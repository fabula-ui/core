// Component commons
import componentCommons from '../../common/component.commons';

const DropdownStyles = params => {
    const { framework, props } = params;
    const vars = window.__FABTheme.variables.components.dropdown;
    const listVars = window.__FABTheme.variables.components.list;
    const { align, direction, expand } = props;
    const { borderRadius } = vars;
    const wrapper = framework === 'angular' ? '.fab-dropdown-wrapper' : '&';

    return `
    ${wrapper} { ${componentCommons} }
    ${wrapper} {
        display: inline-flex;
        ${expand ? `width: 100%;` : ''} 
    }

    .fab-dropdown {
        position: relative;
        width: 100%;
    }

    .fab-dropdown-toggle {
        ${expand ? `width: 100%;` : ''}
    }

    .fab-dropdown-toggle__label {
        flex-grow: 1;
    }

    // External components

    .fab-dropdown-toggle > .fab-button-wrapper {
        width: 100%;
    }

    .fab-dropdown[data-open='true'] .fab-icon[data-toggle-icon] {
        transform: ${direction === 'down' ? `rotateZ(180deg)` : `rotateZ(0)`};
    }

    .fab-icon[data-toggle-icon] {
        transform: ${direction === 'down' ? `rotateZ(0)` : `rotateZ(180deg)`};
    }
    `
};

export default DropdownStyles;