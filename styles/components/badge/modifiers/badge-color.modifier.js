import { getComponentColors } from '../../../methods/misc/getComponentColors';
import { getComponentVars } from '../../../methods/misc/getComponentVars';

export const colorModifier = params => {
    const { props } = params;
    const vars = getComponentVars('badge');
    const { bgColor, borderColor, glowColor, textColor } = getComponentColors('badge', props);

    return `
        .fab-badge {
            background: ${bgColor};
            ${(props.border || props.outline) ? `border-color: ${borderColor};` : ''}
            ${(props.glow && glowColor) ? `box-shadow: ${vars.glowX} ${vars.glowY} ${vars.glowRadius} ${vars.glowSpread} ${glowColor};` : ''}
            color: ${textColor};
        }
    `;
};