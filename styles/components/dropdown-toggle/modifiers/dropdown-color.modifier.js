import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/getTextColor';
import getBgColor from '../../../methods/color/getBgColor';

const colorModifier = params => {
    const { props } = params;
    const vars = getComponentVars('button');
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';
    let iconColor;

    if (typeof props.icon === 'object') {
        iconColor = props.icon.color ? getColor(props.icon.color, vars.colors) : vars.color;
    }
    

    return `
        
    `
}

export default colorModifier;