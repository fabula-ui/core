import { getComponentVars } from '../../../methods/misc/getComponentVars';

export const sizeModifier = params => {
    const { props } = params;
    const vars = getComponentVars('badge');
    const multiplier = vars.sizeMultipliers[props.size || 'md'];

    return `
        .fab-badge {
            font-size: calc(${vars.fontSize} * ${multiplier});
        }
    `;
}