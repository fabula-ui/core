import colorModifier from './modifiers/color.modifier';

const SegmentStyles = params => {
    const { props } = params;
    return `
        .fab-segment {
            font-size: .9rem;
            font-weight: 500;
        }

        .fab-segment > a,
        .fab-segment > button {
            appearance: none;
            background: none;
            border: none;
            color: inherit;
            font-size: inherit;
            font-weight: inherit;
            padding: .75rem 1.5rem;
            text-align: inherit;
            transition: all .2s ease-in-out;
            
            &:focus {
                outline: none;
            }
        }

        ${colorModifier(props)}
    `;
}

export default SegmentStyles;