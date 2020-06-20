import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('tooltip');
    const wrapper = framework === 'angular' ? '.fab-tooltip' : '&';
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';

    return `
        ${wrapper} {
            background: ${getBgColor(color, context)};
            color: ${getTextColor(color, context)};
        }
    `;
}

export default colorModifier;