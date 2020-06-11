import getBgColor from '../../../methods/color/bgColor';
import getBorderColor from '../../../methods/color/borderColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getGlowColor from '../../../methods/color/glowColor';
import getTextColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const vars = getComponentVars('badge');
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';

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