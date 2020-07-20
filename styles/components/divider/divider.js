import getBgColor from '../../methods/color/getBgColor';
import getColor from '../../methods/color/getColor';
import getComponentVars from '../../methods/misc/getComponentVars';

const DividerStyles = params => {
    const {framework, props} = params;
    const vars = getComponentVars('divider');
    const color = props.color || props.parentColor ? getColor(props.color || props.parentColor, vars.colors) : vars.color;
    const wrapper = framework === 'angular' ? '.fab-divider' : '&';

    return `
        ${wrapper} {
            background: ${getBgColor(color, props.color || props.parentColor ? 'adapt' : 'fill')};
            height: 1px;
            width: 100%;
        }
    `
}

export default DividerStyles;