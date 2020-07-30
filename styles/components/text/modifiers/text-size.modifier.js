import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('text');
    const multiplier = vars.sizeMultipliers[props.size];
    const wrapper = framework === 'angular' ? '.fab-text' : '&';

    return `
        ${wrapper} {
            font-size: calc(${vars.fontSize} * ${multiplier});

            .fab-text {
                font-size: inherit;
            }
        }
    `;
}

export default sizeModifier;