import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('badge');
    const multiplier = vars.sizeMultipliers[props.size || 'md'];
    const wrapper = framework === 'angular' ? '.fab-badge' : '&';

    return `
        ${wrapper} {
            font-size: calc(${vars.fontSize} * ${multiplier});
        }
    `;
}

export default sizeModifier;