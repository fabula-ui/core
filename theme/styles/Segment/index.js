import colorModifier from './modifiers/color.modifier';

const SegmentStyles = params => {
    const { props } = params;
    const { rounded } = props;

    return `
        .fab-segment {
            ${rounded ? `border-radius: 5rem;` : ''}
            font-size: .9rem;
            font-weight: 500;
            overflow: hidden;
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