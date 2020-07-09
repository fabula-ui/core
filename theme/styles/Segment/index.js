import colorModifier from './modifiers/color.modifier';

const SegmentStyles = params => {
    const { framework, props } = params;
    const { rounded } = props;
    const wrapper = framework === 'angular' ? '.fab-segment' : '&';

    return `
        ${framework === 'angular' ? `& { flex-grow: 1; flex-shrink: 0; }` : ''}
        ${wrapper} {
            ${rounded ? `border-radius: 5rem;` : ''}
            flex-grow: 1;
            flex-shrink: 0;
            font-size: .9rem;
            font-weight: 500;
            overflow: hidden;
        }

        ${wrapper} > a,
        ${wrapper} > button {
            appearance: none;
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            font-size: inherit;
            font-weight: inherit;
            padding: .75rem 1.5rem;
            text-align: inherit;
            transition: all .2s ease-in-out;
            width: 100%;
            
            &:focus {
                outline: none;
            }
        }

        ${colorModifier(params)}
    `;
}

export default SegmentStyles;