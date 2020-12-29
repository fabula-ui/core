import { getComponentVars } from '../../../methods/misc/getComponentVars';
import { getNumber } from '../../../methods/misc/getNumber';

export const sizeModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('icon');
    const multiplier = vars.sizeMultipliers[props.size];
    const wrapper = framework === 'angular' ? '.fab-icon' : '&';

    return `
        ${wrapper} {
            font-size: ${+props.size ? getNumber(props.size, 'rem') : `calc(1em * ${multiplier})`};
        }
    `;
}