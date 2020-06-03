// Component commons
import componentCommons from '../../common/component.commons';

const DropdownStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.dropdown;
    const listVars = theme.variables.components.list;
    const { borderRadius } = vars;
    const wrapper = framework === 'angular' ? '.fab-dropdown-wrapper' : '&';

    return `
    ${wrapper} { ${componentCommons} }
    ${wrapper} {
        display: inline-flex;
    }

    .fab-dropdown {
        position: relative;
        width: 100%;
    }

    .fab-dropdown[data-open='true'] {
        .fab-dropdown__menu {
            opacity: 1;
            transform: translate(0, 0);
            visibility: visible;
        }
    }

    .fab-dropdown__item {
        appearance: none;
        background: none;
        border: none;
        color: inherit;
        padding: ${listVars.padding};
        text-align: left;

        &:focus {
            outline: none;
        }
    }

    button.fab-dropdown__item {
        cursor: pointer;
        width: 100%;
    }
    
    .fab-dropdown__menu {
        background: #FFF;
        border-radius: ${borderRadius};
        box-shadow: 0 1px 3px rgba(0,0,0,.2);
        left: 0;
        margin-top: 5px;
        min-width: 100%;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        text-align: left;
        top: 100%;
        transition: all .2s ease-in-out;
        transform: translate(0, -10px);
        visibility: hidden;
        z-index: 9999;
    }

    .fab-dropdown-toggle__label {
        flex-grow: 1;
        text-align: left;
    }

    // External components

    .fab-dropdown[data-open='true'] .fab-icon[data-toggle-icon] {
        transform: rotateZ(180deg);
    }

    .fab-dropdown .fab-list-item {
        padding: 0;
        width: 100%;
    }

    .fab-dropdown .fab-list-item .fab-button-wrapper {
        width: 100%;
    }

    .fab-dropdown .fab-list-item .fab-button {
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