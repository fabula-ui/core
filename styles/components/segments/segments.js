// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/segments-color.modifier';

const SegmentsStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('segments');
    const wrapper = framework === 'angular' ? '.fab-segments' : '&';
    
    return `
        ${wrapper} {
            border-radius: ${vars.borderRadius};
            ${props.rounded ? `border-radius: 999px;` : ''}
            display: flex;
            overflow: hidden;
            ${props.rounded ? `padding: 1px;` : ''}
            text-align: center;
            width: 100%;
        }

        // Modifiers
        ${colorModifier(params)}
    `;
}

export default SegmentsStyles;