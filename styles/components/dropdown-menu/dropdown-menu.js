import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/dropdown-menu-color.modifier';

const DropdownMenuStyles = params => {
    const {framework, props} = params;
    const vars = getComponentVars('dropdownMenu');
    const wrapper = framework === 'angular' ? '.fab-dropdown-menu' : '&';
    const upOffset = `${props.dropdownHeight + props.height}px`;

    return `
    ${wrapper} {
        background: #FFF;
        border-radius: ${vars.borderRadius};
        box-shadow: 0 1px 3px rgba(0,0,0,.2);
        font-family: ${vars.fontFamily};
        height: ${props.height};
        left: 0;
        margin-top:${props.direction === 'down' ? `5px;` : `-5px;`}
        min-width: 100%;
        opacity: 0;
        overflow: hidden;
        padding: ${vars.paddingY} ${vars.paddingX};
        position: absolute;
        text-align: left;
        top: 0;
        transition: all ${vars.transition};
        transform: ${props.direction === 'down' ? `translate3d(0, calc(${props.dropdownHeight}px - ${vars.spacing}), 0)` : `translate3d(0, calc(-${props.height}px + ${vars.spacing}), 0)`};
        visibility: hidden;
        z-index: 9999;
    }

    ${wrapper}[data-open='false'] {
        cursor: default;
        pointer-events: none;
    }

    ${wrapper}[data-open='true'] {
        opacity: 1;
        transform: ${props.direction === 'down' ? `translate3d(0, calc(${props.dropdownHeight}px), 0)` : `translate3d(0, -${props.height}px, 0)`} ;
        visibility: visible;
    }

    // External components
    ${wrapper} .fab-divider {
        margin: ${vars.paddingY} 0;
    }
    .fab-dropdown .fab-text {
        white-space: nowrap;
    }

    ${colorModifier(params)}
    `
}

export default DropdownMenuStyles;