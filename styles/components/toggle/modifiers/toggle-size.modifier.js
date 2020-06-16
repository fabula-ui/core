import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('toggle');
    const sizeMultiplier = vars.sizeMultipliers[props.size || 'md'];
    const wrapper = framework === 'angular' ? '.fab-toggle-wrapper' : '&';

    return `
        .fab-toggle {
            height: calc(${vars.size} * ${sizeMultiplier});
            width: calc(${vars.size} * 1.75 * ${sizeMultiplier});

            &:before {
                height: calc(${vars.size} * ${sizeMultiplier} - 4px);
                width: calc(${vars.size} * ${sizeMultiplier} - 4px);
            }
        }

        .fab-toggle__label {
            font-size: calc(${vars.fontSize} * ${sizeMultiplier});
        }
    `;
}

export default sizeModifier;