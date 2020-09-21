import getBgColor from '../../methods/color/getBgColor';
import getColor from '../../methods/color/getColor';
import getComponentVars from '../../methods/misc/getComponentVars';
import getContext from '../../methods/misc/getContext';

const ElementStyles = params => {
    const { props } = params;
    const vars = getComponentVars('element');
    const color = (props.color || props.clear) ? getColor(props.color, vars.colors) : vars.color;
    const context = (props.color || props.clear) ? getContext(props) : 'fill';

    return `
        & {
            ${props.color ? `color: ${getBgColor(color, context)};` : ''}
            display: inline-block;
        }
    `
}

export default ElementStyles;