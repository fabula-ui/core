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

    .fab-dropdown[data-open='true'] {
        .fab-dropdown__menu {
            opacity: 1;
            transform: ${direction === 'down' ? `translate(0, 0)` : 'translate(0, -100%)'} ;
            visibility: visible;
        }
    }

    .fab-dropdown-item__label {
        flex-grow: 1;
        text-align: left;
    }
    
    .fab-dropdown__menu {
        background: #FFF;
        border-radius: ${borderRadius};
        box-shadow: 0 1px 3px rgba(0,0,0,.2);
        left: 0;
        margin-top:${direction === 'down' ? `5px;` : `-5px;`}
        min-width: 100%;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        text-align: left;
        ${direction === 'down' ? `top: 100%;` : ''}
        ${direction === 'up' ? `top: 0;` : ''}
        transition: all .2s ease-in-out;
        transform: ${direction === 'down' ? `translate(0, -10px);` : `translate(0, calc(-100% + 10px));`}
        visibility: hidden;
        z-index: 9999;
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

    .fab-list-item[data-dropdown-item] {
        padding: 0;
        width: 100%;
    }

    .fab-icon[data-toggle-icon] {
        transform: ${direction === 'down' ? `rotateZ(0)` : `rotateZ(180deg)`};
    }

    .fab-dropdown .fab-list-item .fab-button-wrapper {
        width: 100%;
    }

    .fab-button[data-dropdown-item] {
        border-radius: 0;
        justify-content: flex-start;

        &:focus:before {
            border: none;
        }
    }

    .fab-drodpown .fab-text {
        white-space: nowrap;
    }
    `
};

export default DropdownStyles;