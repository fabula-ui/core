import { getComponentVars } from '../../../methods/misc/getComponentVars';

export const sizeModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('button');
    const multiplier = vars.sizeMultipliers[props.size];
    const wrapper = framework === 'angular' ? '.fab-button' : '&';

    return `
            ${wrapper} {
                font-size: calc(${vars.fontSize} * ${multiplier});
                ${(!!props.circle || !!props.icon) && !props.label && !props.smashed ? `height: calc(${vars.height} * ${multiplier});` : ''}
                ${(!!props.circle || !!props.icon) && !props.label && props.smashed ? `height: calc(${vars.heightSmashed} * ${multiplier});` : ''}
                ${(!!props.circle || !!props.icon) && !props.label && !props.smashed ? `width: calc(${vars.height} * ${multiplier});` : ''}
                ${(!!props.circle || !!props.icon) && !props.label && props.smashed ? `width: calc(${vars.heightSmashed} * ${multiplier});` : ''}
            }
        `;
}