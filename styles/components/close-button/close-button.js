import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/close-button-color.modifier';

const CloseButtonStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('closeButton');
    const multiplier = vars.sizeMultipliers[props.size || 'md'];
    const wrapper = framework === 'angular' ? '.fab-close-button' : '&';

    return `
        ${wrapper} {
            align-items: center;
            appearance: none;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: inline-flex;
            flex-shrink: 0;
            font-size: ${vars.fontSize};
            height: calc(2 * ${vars.fontSize} * ${multiplier});
            justify-content: center;
            margin-left: .5rem;
            padding: 0;
            position: relative;
            transition: all .2s ease-in-out;
            width: calc(2 * ${vars.fontSize} * ${multiplier});

            &:focus {
                outline: none;
            }

            &:active {
                opacity: .8;
            }
        }

        // Modifiers
        ${colorModifier(params)}
    `;
}

export default CloseButtonStyles;