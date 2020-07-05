import getComponentVars from '../../methods/misc/getComponentVars';

const DropdownMenuStyles = params => {
    const {framework, props} = params;
    const vars = getComponentVars('dropdown');
    const wrapper = framework === 'angular' ? '.fab-dropdown-menu-wrapper' : '&';

    return `
    .fab-dropdown-menu {
        background: #FFF;
        border-radius: ${vars.borderRadius};
        box-shadow: 0 1px 3px rgba(0,0,0,.2);
        left: 0;
        margin-top:${props.direction === 'down' ? `5px;` : `-5px;`}
        min-width: 100%;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        text-align: left;
        ${props.direction === 'down' ? `top: 100%;` : ''}
        ${props.direction === 'up' ? `top: 0;` : ''}
        transition: all .2s ease-in-out;
        transform: ${props.direction === 'down' ? `translate(0, -10px);` : `translate(0, calc(-100% + 10px));`}
        visibility: hidden;
        z-index: 9999;
    }

    .fab-dropdown-menu[data-open='false'] {
        cursor: default;
        pointer-events: none;
    }

    .fab-dropdown-menu[data-open='true'] {
        opacity: 1;
        transform: ${props.direction === 'down' ? `translate(0, 0)` : 'translate(0, -100%)'} ;
        visibility: visible;
    }

    .fab-dropdown-item__label {
        flex-grow: 1;
        text-align: left;
    }

    // External components

    fab-button[data-dropdown-item] .fab-button,
    .fab-button[data-dropdown-item] {
        border-radius: 0;
        justify-content: flex-start;
        text-align: left;

        &:focus {
            box-shadow: none;
        }
    }
    
    fab-list-item[data-dropdown-item] .fab-list-item,
    .fab-list-item[data-dropdown-item] {
        width: 100%;
    }

    .fab-dropdown .fab-text {
        white-space: nowrap;
    }
    `
}

export default DropdownMenuStyles;