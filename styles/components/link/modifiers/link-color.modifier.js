import { getActiveColor } from '../../../methods/color/getActiveColor';
import { getBgColor } from '../../../methods/color/getBgColor';
import { getColor } from '../../../methods/color/getColor';
import { getComponentVars } from '../../../methods/misc/getComponentVars';
import { getContext } from '../../../methods/misc/getContext';
import { getHoverColor } from '../../../methods/color/getHoverColor';

export const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('link');
    const wrapper = framework === 'angular' ? '.fab-link' : '&';

    const baseColor = getColor(vars.color, vars.colors);
    const context = getContext(props);
    const hoverColor = props.hoverColor ? getColor(props.hoverColor, vars.colors) : null;
    const userColor = getColor(props.color, vars.colors);

    return `
        ${wrapper} {
            color: ${getBgColor(userColor || baseColor, context)};
            ${props.aux ? `color: ${vars.auxTextColor};` : ''}
            transition: all .2s ease-in-out;

            &:hover {
                color: ${getHoverColor(hoverColor || userColor || baseColor, context)};
                ${props.aux ? `color: ${baseColor};` : ''}
            }

            &:active {
                color: ${getActiveColor(hoverColor || userColor || baseColor, context)};
                ${props.aux ? `color: ${getActiveColor(baseColor, context)};` : ''}
            }
        }
    `;
}