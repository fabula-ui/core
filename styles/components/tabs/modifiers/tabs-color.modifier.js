import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('tabs');
    const color = props.color || props.clear ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color || props.clear ? getContext(props) : 'fill';
    const wrapper = framework === 'angular' ? '.fab-tabs-wrapper' : '&';

    return `
        ${wrapper} {
            background-color: ${getBgColor(color, context)};
            color: ${getTextColor(color, context)};
        }
    `;
}

export default colorModifier;