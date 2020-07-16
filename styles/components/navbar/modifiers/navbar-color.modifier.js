import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('navbar');
    const wrapper = framework === 'angular' ? '.fab-navbar' : '&';
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';

    return `
        ${wrapper} {
            background: ${getBgColor(color, context)};
        }
    `;
}

export default colorModifier;