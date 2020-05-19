import colorModifier from './modifiers/color.modifier';

const SegmentsStyles = params => {
    const { props } = params;
    
    return `
        .fab-segments {
            border-radius: .5rem;
            display: flex;
            overflow: hidden;
        }

        ${colorModifier(props)}
    `;
}

export default SegmentsStyles;