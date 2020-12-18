import { getBorderColor } from '../../../methods/color/getBorderColor';
import { getContext } from '../../../methods/misc/getContext';
import { getDividerColor } from '../../../methods/color/getDividerColor';
import { getColor } from '../../../methods/color/getColor';
import { getComponentVars } from '../../../methods/misc/getComponentVars';
import { getGlowColor } from '../../../methods/color/getGlowColor';
import { getNumber } from '../../../methods/misc/getNumber';

export const typeModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('alert');
    const color = getColor(props.type, vars.colors);
    const context = getContext(props) || 'faded';
    const wrapper = framework === 'angular' ? '.fab-alert' : '&';

    if (color) {
        return `
            ${wrapper} {
                background: #FFF;
                border-color: ${!!props.border ? `${getDividerColor(color, context)}` : 'transparent'};
                ${((props.borderColor || props.outline) && !!props.border) ? `border-color: ${getBorderColor(color, context)};` : ''}
                ${props.glow ? `box-shadow: ${getNumber(vars.glowX, 'px')} ${getNumber(vars.glowY, 'px')} ${getNumber(vars.glowRadius, 'px')} ${getNumber(vars.glowSpread, 'px')} ${getGlowColor(color, context)};` : ''}

                &:before {
                    background: ${getBorderColor(color, context)};
                }
            }

            .fab-alert__title {
                ${(!props.textColor) ? `color: ${color};` : ''}
            }
        `
    }
}