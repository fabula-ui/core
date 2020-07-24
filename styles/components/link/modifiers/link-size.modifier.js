import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = params => {
    const {framework, props} = params;
    const vars = getComponentVars('link');
    const multiplier = vars.sizeMultipliers[props.size];
    const wrapper = framework === 'angular' ? '.fab-link' : '&';

    return `
            ${wrapper} {
                font-size: calc(${vars.fontSize} * ${multiplier});
            }
        `;
}

export default sizeModifier;