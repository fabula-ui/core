// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/segments-color.modifier';

const SegmentsStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('segments');
    const wrapper = framework === 'angular' ? '.fab-segments-wrapper' : '&';
    
    return `
        ${framework === 'angular' ? '& { display: block; }' : ''}
        ${wrapper} {
            display: flex;
        }

        .fab-segments {
            border-radius: ${vars.borderRadius};
            ${props.rounded ? `border-radius: 999px;` : ''}
            display: flex;
            overflow: hidden;
            ${props.rounded ? `padding: 1px;` : ''}
            text-align: center;
            width: 100%;
        }

        ${colorModifier(props)}
    `;
}

export default SegmentsStyles;