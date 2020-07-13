// Modifiers
import colorModifier from './modifiers/tab-color.modifier';
import typeModifier from './modifiers/tab-type.modifier';

const TabStyle = params => {
    const { framework, props } = params;
    const wrapper = framework === 'angular' ? '.fab-tab' : '&';

    return `
        ${props.expand ? `flex-grow: 1;` : ''}
        ${props.expand ? `flex-shrink: 0;` : ''}
        
        ${wrapper} {
            ${props.expand ? `flex-grow: 1;` : ''}
            ${props.expand ? `flex-shrink: 0;` : ''}
        }

        ${wrapper} {
            font-size: 1rem;
            font-weight: 500;
        }

        ${wrapper} > a,
        ${wrapper} > button {
            align-items: center;
            appearance: none;
            background: none;
            border: none;
            border-bottom: solid 3px transparent;
            color: inherit;
            cursor: pointer;
            display: flex;
            font-size: inherit;
            font-weight: inherit;
            line-height: 1;
            justify-content: ${props.stacked ? 'flex-start' : 'center'};
            padding: 1rem;
            ${props.stacked ? `padding-left: 0;` : ''}
            text-align: ${props.stacked ? 'left' : 'center'};
            transition: all .2s ease-in-out;
            width: 100%;
            
            
            &:focus {
                outline: none;
            }

            > *:not(:last-child) {
                ${props.layout === 'vertical' ? 'margin-bottom: .5em;' : 'margin-right: .5em;'}
            }
        }

        ${colorModifier(params)}
        ${props.type ? typeModifier(params) : ''}
    `
}

export default TabStyle;