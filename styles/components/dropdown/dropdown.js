import getComponentVars from '../../methods/misc/getComponentVars';

const DropdownStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('dropdown');
    const wrapper = framework === 'angular' ? '.fab-dropdown-wrapper' : '&';

    return `
    ${wrapper} {
        display: inline-flex;
        ${props.expand ? `width: 100%;` : ''} 
    }

    .fab-dropdown {
        position: relative;
        width: 100%;
    }

    .fab-dropdown-toggle {
        ${props.expand ? `width: 100%;` : ''}
    }

    .fab-dropdown-toggle__label {
        flex-grow: 1;
    }

    // External components

    .fab-dropdown-toggle > .fab-button-wrapper {
        width: 100%;
    }

    .fab-dropdown[data-open='true'] .fab-icon[data-toggle-icon] {
        transform: ${props.direction === 'down' ? `rotateZ(180deg)` : `rotateZ(0)`};
    }

    .fab-icon[data-toggle-icon] {
        transform: ${props.direction === 'down' ? `rotateZ(0)` : `rotateZ(180deg)`};
    }
    `
};

export default DropdownStyles;