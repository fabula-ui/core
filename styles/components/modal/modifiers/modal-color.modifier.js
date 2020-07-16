import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/getTextColor';
import getComponentVars from '../../../methods/misc/getComponentVars';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('modal');

    const color = props.color || props.parentColor ? getColor(props.color || props.parentColor, vars.colors) : vars.color;
    const context = props.color || props.parentColor ? getContext(props) : 'fill';

    return `
        .fab-modal {
            background: ${getBgColor(color, context)};
            color: ${getTextColor(color, context)};
        }
    `;
}

export default colorModifier;