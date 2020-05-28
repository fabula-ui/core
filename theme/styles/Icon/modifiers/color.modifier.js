import getBgColor from '../../../methods/color/bgColor';
import getColorName from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = window.__FABTheme.variables.components.icon;
    const { color } = props;
    const { colors } = vars;
    const element = framework === 'angular' ? '.fab-icon' : '&';

    const colorName = getColorName(color, colors);
    const context = getContext(props);

    return `
        ${element} {
            color: ${getBgColor(colorName, context)};
        }
    `;
}

export default colorModifier;