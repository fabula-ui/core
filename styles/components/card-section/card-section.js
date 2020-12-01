// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/card-section-color.modifier';

const CardSectionStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('cardSection');
    const wrapper = framework === 'angular' ? '.fab-card-section' : '&';

    return `
        ${wrapper} {
            font-size: ${vars.fontSize};
            ${framework === 'angular' && props.expand && (props.layout === 'v' || props.layout === 'vertical') ? 'height: 100%;' : ''}
            ${framework === 'angular' && (props.layout === 'h' || props.layout === 'horizontal') ? 'width: 100%;' : ''}
        }

        ${framework === 'angular' ? `&:first-child > .fab-card-section {` : ''}
        ${framework !== 'angular' ? `&:first-child {` : ''}
            border-bottom-left-radius: ${props.layout === 'h' || props.layout === 'horizontal' ? vars.borderRadius : 0};
            border-top-left-radius: ${vars.borderRadius};
            border-top-right-radius: ${props.layout === 'h' || props.layout === 'horizontal' ? 0 : vars.borderRadius};
        }

        ${framework === 'angular' ? `&:last-child > .fab-card-section {` : ''}
        ${framework !== 'angular' ? `&:last-child {` : ''}
            border-bottom-left-radius: ${props.layout === 'h' || props.layout === 'horizontal' ? 0 : vars.borderRadius};
            border-bottom-right-radius: ${vars.borderRadius};
            border-top-right-radius: ${props.layout === 'h' || props.layout === 'horizontal' ? vars.borderRadius : 0};
        }

        ${framework === 'angular' ? `&:only-child > .fab-card-section {` : ''}
        ${framework !== 'angular' ? `&:only-child {` : ''}
            border-radius: ${vars.borderRadius};
        }

        ${wrapper} {
            flex-grow: 1;
            ${props.padding ? `padding-bottom: ${vars.paddingBottom};` : ''}
            ${props.padding ? `padding-left: ${vars.paddingLeft};` : ''}
            ${props.padding ? `padding-right: ${vars.paddingRight};` : ''}
            ${props.padding ? `padding-top: ${vars.paddingTop};` : ''}
        }

        ${colorModifier(params)}
    `
}

export default CardSectionStyles;