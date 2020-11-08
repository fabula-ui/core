import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('tag');
    const multiplier = vars.sizeMultipliers[props.size];
    const wrapper = framework === 'angular' ? '.fab-tag' : '&';

    return `
        ${wrapper} {
            font-size: calc(${vars.fontSize} * ${multiplier});
        }
    `;
}

export default sizeModifier;