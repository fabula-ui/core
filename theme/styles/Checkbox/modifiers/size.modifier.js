import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('toggle');
    const sizeMultiplier = vars.sizeMultipliers[props.size || 'md'];
    const wrapper = framework === 'angular' ? '.fab-toggle-wrapper' : '&';

    return `
        .fab-checkbox {
            font-size: calc(${vars.fontSize} * ${sizeMultiplier});
        }

        .fab-checkbox__label {
            font-size: calc(${vars.fontSize} * ${sizeMultiplier});
        }
    `;
}

export default sizeModifier;