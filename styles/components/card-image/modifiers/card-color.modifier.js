import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getPlaceholderIconColor from '../../../methods/color/getPlaceholderIconColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('card');
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';
    const wrapper = framework === 'angular' ? '.fab-card-image' : '&';

    return `
        ${wrapper} {
            ${!props.color ? `background: ${vars.placeholderImageColor};` : ''}
            ${props.color ? `background: ${getBgColor(color, props.adaptColor ? 'adapt' : context)};` : ''}
        }

        .fab-icon {
            ${!props.color ? `color: ${getPlaceholderIconColor(vars.placeholderImageColor, context)};` : ''}
            ${props.color ? `color: ${getPlaceholderIconColor(color, context)}` : ''}
        }
    `;
}

export default colorModifier;