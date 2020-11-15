import getBgColor from '../../methods/color/getBgColor';
import getColor from '../../methods/color/getColor';
import getComponentVars from '../../methods/misc/getComponentVars';
import getContext from '../../methods/misc/getContext';

const WrapperStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('wrapper');
    const color = props.color ? getColor(props.color, vars.colors) : '';
    const textColor = (props.textColor || props.clear) ? getColor(props.textColor, vars.colors) : vars.color;
    const context = (props.color || props.clear) ? getContext(props) : 'fill';
    const wrapper = framework === 'angular' ? '.fab-wrapper' : '&';

    return `
        ${wrapper} {
            ${props.color ? `background-color: ${getBgColor(color, context)};` : ''}
            ${props.textColor ? `color: ${getBgColor(textColor, context)};` : ''}
            display: block;
        }
    `
}

export default WrapperStyles;