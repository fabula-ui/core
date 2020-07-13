import getBgColor from "../../../methods/color/getBgColor";
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('tabs');
    const color = getColor(props.color, vars.colors) || '#FFF';
    const context = getContext(props);
    const wrapper = framework === 'angular' ? '.fab-tabs-wrapper' : '&';

    return `
        ${wrapper} {
            background-color: ${getBgColor(color, context)};
            color: ${getTextColor(color, context)};
        }
    `;
}

export default colorModifier;