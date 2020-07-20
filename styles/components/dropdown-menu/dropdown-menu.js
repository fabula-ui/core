import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/dropdown-menu-color.modifier';

const DropdownMenuStyles = params => {
    const {framework, props} = params;
    const vars = getComponentVars('dropdownMenu');
    const wrapper = framework === 'angular' ? '.fab-dropdown-menu' : '&';

    return `
    ${wrapper} {
        background: #FFF;
        border-radius: ${vars.borderRadius};
        box-shadow: 0 1px 3px rgba(0,0,0,.2);
        font-family: ${vars.fontFamily};
        height: ${props.height};
        ${props.alignment === 'left' ? 'left: 0;' : ''}
        margin-top: ${props.direction === 'down' ? `5px;` : `-5px;`}
        min-width: 100%;
        opacity: 0;
        overflow: hidden;
        ${props.padding ? `padding: ${vars.paddingY} ${vars.paddingX};` : ''}
        position: absolute;
        ${props.alignment === 'right' ? 'right: 0;' : ''}
        text-align: left;
        top: ${props.direction === 'down' ? '100%' : 0};
        transform: ${props.direction === 'down' ? `translate(0, 0)` : `translate(0, -100%)`};
        transition: all ${vars.transition};
        visibility: hidden;
        z-index: 9999;
    }

    ${wrapper}[data-open='false'] {
        cursor: default;
        pointer-events: none;
    }

    ${wrapper}[data-open='true'] {
        opacity: 1;
        transform: ${props.direction === 'down' ? `translate(0, 0)` : `translate(0, -100%)`};
        visibility: visible;
    }

    // External components
    ${wrapper} .fab-divider {
        ${props.padding ? `margin: ${vars.paddingY} 0;` : ''}
    }
    .fab-dropdown .fab-text {
        white-space: nowrap;
    }

    ${colorModifier(params)}
    `
}

export default DropdownMenuStyles;