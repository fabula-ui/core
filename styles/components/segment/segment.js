// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/segment-color.modifier';

const SegmentStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('segments');
    const wrapper = framework === 'angular' ? '.fab-segment' : '&';

    return `
        ${framework === 'angular' ? `& { flex-grow: 1; flex-shrink: 0; }` : ''}
        ${wrapper} {
            ${props.rounded ? `border-radius: 5rem;` : ''}
            flex-grow: 1;
            flex-shrink: 0;
            font-size: ${vars.fontSize};
            font-weight: ${vars.fontWeight};
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
            padding: ${vars.paddingY} ${vars.paddingX};
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