// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/segments-color.modifier';

const SegmentsStyles = params => {
    const { props } = params;
    const vars = getComponentVars('segments');
    
    return `
        & {
            display: block;
        }

        .fab-segments {
            border-radius: ${vars.borderRadius};
            ${props.rounded ? `border-radius: 999px;` : ''}
            display: flex;
            font-size: ${vars.fontSize};
            overflow: hidden;
            ${props.rounded ? `padding: 1px;` : ''}
            text-align: center;
        }

        // Modifiers
        ${colorModifier(params)}
    `;
}

export default SegmentsStyles;