import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import typeModifier from './modifiers/type.modifier';

const TabStyle = params => {
    const { framework, props } = params;
    const { expand, layout, stacked, type } = props;
    const wrapper = framework === 'angular' ? '.fab-tab' : '&';

    return `
        ${wrapper} { ${componentCommons} }

        ${framework === 'angular' ? `fab-tab,` : ''}
        ${wrapper} {
            ${expand ? `flex-grow: 1;` : ''}
            ${expand ? `flex-shrink: 0;` : ''}
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
            justify-content: ${stacked ? 'flex-start' : 'center'};
            padding: 1rem;
            ${stacked ? `padding-left: 0;` : ''}
            text-align: ${stacked ? 'left' : 'center'};
            transition: all .2s ease-in-out;
            width: 100%;
            
            
            &:focus {
                outline: none;
            }

            > *:not(:last-child) {
                
                ${layout === 'vertical' ? 'margin-bottom: .5em;' : 'margin-right: .5em;'}
            }
        }

        ${colorModifier(params)}
        ${type ? typeModifier(params) : ''}
    `
}

export default TabStyle;