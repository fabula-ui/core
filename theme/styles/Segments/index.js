// Modifiers
import colorModifier from './modifiers/color.modifier';

const SegmentsStyles = params => {
    const { framework, props } = params;
    const { expand, rounded } = props;
    const wrapper = framework === 'angular' ? '.fab-segments-wrapper' : '&';
    
    return `
        ${framework === 'angular' ? '& { display: block; }' : ''}
        ${wrapper} {
            display: flex;
        }

        .fab-segments {
            border-radius: .5rem;
            ${rounded ? `border-radius: 5rem;` : ''}
            display: flex;
            overflow: hidden;
            ${rounded ? `padding: 1px;` : ''}
            text-align: center;
            width: 100%;
        }

        ${colorModifier(props)}
    `;
}

export default SegmentsStyles;