import { getColor } from '../../../methods/color/getColor';
import { getComponentColors } from '../../../methods/misc/getComponentColors';
import { getComponentVars } from '../../../methods/misc/getComponentVars';
import { getNumber } from '../../../methods/misc/getNumber';

export const colorModifier = params => {
    const { framework, props } = params;
    const { bgColor, borderColor, glowColor, textColor } = getComponentColors('alert', props);
    const vars = getComponentVars('alert');
    const wrapper = framework === 'angular' ? '.fab-alert' : '&';

    return `
        ${wrapper} {
            background: ${bgColor};
            border-color: ${borderColor};
            ${props.glow ? `box-shadow: ${getNumber(vars.glowX, 'px')} ${getNumber(vars.glowY, 'px')} ${getNumber(vars.glowRadius, 'px')} ${getNumber(vars.glowSpread, 'px')} ${glowColor};` : ''}
            color: ${textColor};
        }

        .fab-alert__text {
            ${props.textColor ? `color: ${getColor(props.textColor, vars.colors)};` : ''}
        }

        .fab-alert__title {
            ${props.titleColor ? `color: ${getColor(props.titleColor, vars.colors)};` : ''}
        }
    `
}