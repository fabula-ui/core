import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('button');
    const multiplier = vars.sizeMultipliers[props.size];
    const wrapper = framework === 'angular' ? '.fab-button' : '&';

    return `
            ${wrapper} {
                font-size: calc(${vars.fontSize} * ${multiplier});
                ${(!!props.circle || !!props.icon) && !props.label && !props.smashed ? `height: calc(3rem * ${multiplier});` : ''}
                ${(!!props.circle || !!props.icon) && !props.label && props.smashed ? `height: calc(2rem * ${multiplier});` : ''}
                min-height: calc(${vars.minHeight} * ${multiplier});
                ${(!!props.circle || !!props.icon) && !props.label && !props.smashed ? `width: calc(3rem * ${multiplier});` : ''}
                ${(!!props.circle || !!props.icon) && !props.label && props.smashed ? `width: calc(2rem * ${multiplier});` : ''}
            }
        `;
}

export default sizeModifier;