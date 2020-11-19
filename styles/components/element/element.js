import getBgColor from '../../methods/color/getBgColor';
import getColor from '../../methods/color/getColor';
import getComponentVars from '../../methods/misc/getComponentVars';
import getContext from '../../methods/misc/getContext';

const ElementStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('element');
    const color = (props.color || props.clear) ? getColor(props.color, vars.colors) : vars.color;
    const context = (props.color || props.clear) ? getContext(props) : 'fill';
    const wrapper = framework === 'angular' ? '.fab-element' : '&';

    return `
        ${wrapper} {
            ${props.color ? `color: ${getBgColor(color, context)};` : ''}
            display: inline-block;
            vertical-align: middle;
        }

        ${wrapper} > *,
        ${wrapper} .fab-badge-wrapper,
        ${wrapper} .fab-icon {
            vertical-align: middle;
        }
    `
}

export default ElementStyles;