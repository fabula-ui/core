import getBgColor from '../../methods/color/getBgColor';
import getColor from '../../methods/color/getColor';
import getComponentVars from '../../methods/misc/getComponentVars';
import getContext from '../../methods/misc/getContext';

const WrapperStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('wrapper');
    const bgColor = props.bgColor ? getColor(props.bgColor, vars.colors) : '';
    const color = (props.color || props.clear) ? getColor(props.color, vars.colors) : vars.color;
    const context = (props.color || props.clear) ? getContext(props) : 'fill';
    const wrapper = framework === 'angular' ? '.fab-wrapper' : '&';

    return `
        ${wrapper} {
            ${props.bgColor ? `background-color: ${getBgColor(bgColor, context)};` : ''}
            ${props.color ? `color: ${getBgColor(color, context)};` : ''}
            display: block;
        }
    `
}

export default WrapperStyles;