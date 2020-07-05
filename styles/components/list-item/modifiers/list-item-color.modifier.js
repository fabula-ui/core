import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('list');
    const wrapper = framework === 'angular' ? '.fab-list-item' : '&';
    
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = getContext(props);

    return `
        ${wrapper} {
            background-color: ${getBgColor(color, context)};
            color: ${props.color ? `${getTextColor(color, context)}` : 'inherit'};
        }
    `
}

export default colorModifier;