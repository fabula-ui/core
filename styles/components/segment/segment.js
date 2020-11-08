// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/segment-color.modifier';

const SegmentStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('segments');
    const wrapper = framework === 'angular' ? '.fab-segment' : '&';

    return `
        & { flex: 1 0 0; }
        
        ${wrapper} {
            appearance: none;
            background: none;
            border: none;
            ${props.rounded ? `border-radius: 999px;` : ''}
            color: inherit;
            cursor: pointer;
            font-size: inherit;
            font-family: ${vars.fontFamily};
            font-size: ${vars.fontSize};
            font-weight: ${vars.fontWeight};
            overflow: hidden;
            padding: ${vars.paddingTop} ${vars.paddingRight} ${vars.paddingBottom} ${vars.paddingLeft};
            text-align: inherit;
            transition: all ${vars.transition};
            width: 100%;
            
            &:focus {
                outline: none;
            }
        }

        // Modifiers
        ${colorModifier(params)}
    `;
}

export default SegmentStyles;