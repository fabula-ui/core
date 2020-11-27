// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

const DropdownStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('dropdown');
    const wrapper = framework === 'angular' ? '.fab-dropdown' : '&';

    return `
    ${props.expand && framework === 'angular' ? '& { width: 100%; }' : ''}

    ${wrapper} {
        align-items: flex-start;
        display: inline-flex;
        font-size: ${vars.fontSize};
        position: relative;
        ${props.expand ? `width: 100%;` : ''} 
    }

    .fab-dropdown-toggle__label {
        flex-grow: 1;
    }
    `
};

export default DropdownStyles;