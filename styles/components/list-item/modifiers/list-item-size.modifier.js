import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('list');
    const multiplier = vars.sizeMultipliers[props.size || 'md'];
    const wrapper = framework === 'angular' ? '.fab-list-item' : '&';

    return `
            ${wrapper} {
                font-size: calc(${vars.fontSize} * ${multiplier});
            }
        `;
}

export default sizeModifier;