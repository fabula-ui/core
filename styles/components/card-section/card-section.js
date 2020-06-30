// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/card-color.modifier';

const CardSectionStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('card');
    const wrapper = framework === 'angular' ? '.fab-card-section' : '&';

    return `
        ${framework === 'angular' && props.expand ? '& { flex-grow: 1; }' : ''}
        
        ${wrapper} {
            display: flex;
            flex-direction: column;
            ${framework !== 'angular' && props.expand ? 'flex-grow: 1;' : ''}
            ${framework === 'angular' && props.expand && (props.layout === 'v' || props.layout === 'vertical')  ? 'height: 100%;' : ''}
            ${props.padding ? `padding: 1rem;` : ''}
        }

        ${framework === 'angular' ? `&:first-child > .fab-card-section {` : ''}
        ${framework !== 'angular' ? `&:first-child {` : ''}
                border-bottom-left-radius: ${props.layout === 'h' || props.layout === 'horizontal' ? vars.borderRadius : 0};
                border-top-left-radius: ${vars.borderRadius};
                border-top-right-radius: ${props.layout === 'h' || props.layout === 'horizontal' ? 0 : vars.borderRadius};
            }
        }

        ${framework === 'angular' ? `&:last-child > .fab-card-section {` : ''}
        ${framework !== 'angular' ? `&:last-child {` : ''}
                border-bottom-left-radius: ${props.layout === 'h' || props.layout === 'horizontal' ? 0 : vars.borderRadius};
                border-bottom-right-radius: ${vars.borderRadius};
                border-top-right-radius: ${props.layout === 'h' || props.layout === 'horizontal' ? vars.borderRadius : 0};
            }
        }

        ${colorModifier(params)}
    `
}

export default CardSectionStyles;