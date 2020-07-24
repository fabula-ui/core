import getActiveColor from '../../../methods/color/getActiveColor';
import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getHoverColor from '../../../methods/color/getHoverColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('link');
    const wrapper = framework === 'angular' ? '.fab-link' : '&';

    const baseColor = getColor(vars.color, vars.colors);
    const context = getContext(props);
    const userColor = getColor(props.color, vars.colors);

    return `
        ${wrapper} {
            color: ${getBgColor(userColor || baseColor, context)};
            ${props.aux ? `color: ${vars.auxTextColor};` : ''}
            transition: all .2s ease-in-out;

            &:hover {
                color: ${getHoverColor(userColor || baseColor, context)};
                ${props.aux ? `color: ${baseColor};` : ''}
            }

            &:active {
                color: ${getActiveColor(userColor || baseColor, context)};
                ${props.aux ? `color: ${getActiveColor(baseColor, context)};` : ''}
            }
        }
    `;
}

export default colorModifier;