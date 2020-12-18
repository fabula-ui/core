import { getComponentVars } from '../../../methods/misc/getComponentVars';

const sizeModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('input');
    const sizeMultiplier = vars.sizeMultipliers[props.size || 'md'];
    const wrapper = framework === 'angular' ? '.fab-input-wrapper' : '&';

    return `
        ${wrapper} {
            font-size: calc(${vars.fontSize} * ${sizeMultiplier});
        }

        .fab-input[data-textarea='false'] {
            max-height: calc(${vars.height} * ${sizeMultiplier});
        }

        .fab-input[data-textarea='false'] .fab-input__field {
            height: calc(${vars.height} * ${sizeMultiplier});
        }
    `;
}

export default sizeModifier;