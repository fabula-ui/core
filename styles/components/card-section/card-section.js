// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/card-color.modifier';

const CardSectionStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('card');
    const wrapper = framework === 'angular' ? '.fab-card-section' : '&';

    return `
        ${wrapper} {
            ${props.padding ? `padding: 1rem;` : ''}
        }

        ${framework === 'angular' ? `&:first-child > .fab-card-section {` : ''}
        ${framework !== 'angular' ? `&:first-child {` : ''}
                border-top-left-radius: ${vars.borderRadius};
                border-top-right-radius: ${vars.borderRadius};
            }
        }

        ${framework === 'angular' ? `&:last-child > .fab-card-section {` : ''}
        ${framework !== 'angular' ? `&:last-child {` : ''}
                border-bottom-left-radius: ${vars.borderRadius};
                border-bottom-right-radius: ${vars.borderRadius};
            }
        }

        ${colorModifier(params)}
    `
}

export default CardSectionStyles;