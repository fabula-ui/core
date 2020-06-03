import getActiveColor from '../../../methods/color/activeColor';
import getBgColor from '../../../methods/color/bgColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getHoverColor from '../../../methods/color/hoverColor';

const colorModifier = params => {
    const { framework, props } = params;
    const { underline } = props;
    const vars = window.__FABTheme.variables.components.link;
    const wrapper = framework === 'angular' ? '.fab-link' : '&';

    const baseColor = getColor(vars.color, vars.colors);
    const context = getContext(props);
    const userColor = getColor(props.color, vars.colors);

    return `
        ${wrapper} {
            color: ${getBgColor(userColor || baseColor, context)};
            text-decoration: ${underline ? 'underline' : 'none'};
            transition: all .2s ease-in-out;

            &:hover {
                color: ${getHoverColor(userColor || baseColor, context)};
            }

            &:active {
                color: ${getActiveColor(userColor || baseColor, context)};
            }
        }
    `;
}

export default colorModifier;