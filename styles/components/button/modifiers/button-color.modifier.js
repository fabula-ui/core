import { getComponentColors } from '../../../methods/misc/getComponentColors';
import { getComponentVars } from '../../../methods/misc/getComponentVars';
import { getContext } from '../../../methods/misc/getContext';

export const colorModifier = params => {
    const { framework, props } = params;
    const { activeBgColor, activeTextColor, bgColor, borderColor, focusGlowColor, glowColor, hoverBgColor, hoverTextColor, textColor } = getComponentColors('alert', props);
    const vars = getComponentVars('button');
    const context = (props.color || props.clear) ? getContext(props) : 'fill';
    const wrapper = framework === 'angular' ? '.fab-button' : '&';

    return `
        ${wrapper} {
            background: ${bgColor};
            ${(props.border || props.outline) ? `border-color: ${borderColor};` : ''}
            ${props.glow ? `box-shadow: ${vars.glowX} ${vars.glowY} ${vars.glowRadius} ${vars.glowSpread} ${glowColor};` : ''}
            color: ${textColor};

            &:focus {
                box-shadow: 0 0 0 3px ${focusGlowColor};
            }

            &:hover:not([disabled]) {
                ${context !== 'gradient' ? `background: ${hoverBgColor};` : ''}
                color: ${hoverTextColor}
            }

            &:active:not([disabled]) {
                ${context !== 'gradient' ? `background: ${activeBgColor};` : ''}
                color: ${activeTextColor}
            }
        }
    `;
};