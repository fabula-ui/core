import colorModifier from './modifiers/color.modifier';

const SegmentsStyles = params => {
    const { props } = params;
    const { rounded } = props;
    
    return `
        .fab-segments {
            border-radius: .5rem;
            ${rounded ? `border-radius: 5rem;` : ''}
            display: flex;
            overflow: hidden;
            ${rounded ? `padding: 1px;` : ''}
        }

        ${colorModifier(props)}
    `;
}

export default SegmentsStyles;