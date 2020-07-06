import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';

const colorModifier = params => {
    const { props } = params;
    const vars = getComponentVars('dropdown');
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';
    
    return `
        .fab-dropdown-menu {
            background-color: ${getBgColor(color, context)}
        }
    `
}

export default colorModifier;