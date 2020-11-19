import getBgColor from '../../../methods/color/getBgColor';
import getBorderColor from '../../../methods/color/getBorderColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getGlowColor from '../../../methods/color/getGlowColor';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { props } = params;
    const vars = getComponentVars('badge');
    const color = props.color || props.clear ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color || props.clear ? getContext(props) : 'fill';

    return `
        .fab-badge {
            background: ${getBgColor(color, context)};
            ${props.outline ? `border: solid 1px ${getBorderColor(color, context)};` : ''}
            ${props.glow ? `box-shadow: 0 1px 3px ${getGlowColor(color, context)};` : ''}
            color: ${getTextColor(color, context)};
        }
    `;
};

export default colorModifier;