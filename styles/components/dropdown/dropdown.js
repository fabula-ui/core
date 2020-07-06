import getComponentVars from '../../methods/misc/getComponentVars';

const DropdownStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('dropdown');
    const wrapper = framework === 'angular' ? '.fab-dropdown-wrapper' : '&';

    return `
    ${props.expand && framework === 'angular' ? '& { width: 100%; }' : ''}

    ${wrapper} {
        display: inline-flex;
        ${props.expand ? `width: 100%;` : ''} 
    }

    .fab-dropdown {
        position: relative;
        width: 100%;
    }

    .fab-dropdown-toggle__label {
        flex-grow: 1;
    }
    `
};

export default DropdownStyles;