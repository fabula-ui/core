import bgColor from "../../../methods/color/bgColor";
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/textColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = window.__FABTheme.variables.components.tabs;
    const { activeColor, type } = props;
    const { colors, inactiveTextColor, textColor } = vars;
    const color = getColor(props.color, colors) || '#FFF';
    const context = getContext(props);
    const wrapper = framework === 'angular' ? '.fab-tabs-wrapper' : '&';

    return `
        ${wrapper} {
            background-color: ${bgColor(color, context)};
            color: ${getTextColor(color, context)};
        }
    `;
}

export default colorModifier;