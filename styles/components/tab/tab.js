// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/tab-color.modifier';
import typeModifier from './modifiers/tab-type.modifier';

const TabStyle = params => {
    const { framework, props } = params;
    const vars = getComponentVars('tabs');
    const wrapper = framework === 'angular' ? '.fab-tab' : '&';

    return `
        ${props.expand ? `flex-grow: 1;` : ''}
        ${props.expand ? `flex-shrink: 0;` : ''}
        
        ${wrapper} {
            ${props.expand ? `flex-grow: 1;` : ''}
            ${props.expand ? `flex-shrink: 0;` : ''}
        }

        ${wrapper} {
            font-family: ${vars.fontFamily};
            font-size: ${vars.fontSize};
            font-weight: ${vars.fontWeight};
        }

        ${wrapper} > a,
        ${wrapper} > button {
            align-items: center;
            appearance: none;
            background: none;
            border: none;
            border-bottom: solid ${vars.borderWidth} transparent;
            color: inherit;
            cursor: pointer;
            display: flex;
            font-family: inherit;
            font-size: inherit;
            font-weight: inherit;
            line-height: 1;
            justify-content: ${props.stacked ? 'flex-start' : 'center'};
            padding: ${vars.paddingY} ${vars.paddingX};
            ${props.stacked ? `padding-left: 0;` : ''}
            text-align: ${props.stacked ? 'left' : 'center'};
            transition: all ${vars.transition};
            width: 100%;
            
            
            &:focus {
                outline: none;
            }

            > *:not(:last-child) {
                ${(props.layout === 'v' || props.layout === 'vertical') ? 'margin-bottom: .5em;' : 'margin-right: .5em;'}
            }
        }

        ${wrapper}[data-active='true'] {
            ${props.activeFontWeight ? `font-weight: ${props.activeFontWeight};` : ''}
        }

        // Modifiers
        ${colorModifier(params)}
        ${props.type ? typeModifier(params) : ''}
    `
}

export default TabStyle;