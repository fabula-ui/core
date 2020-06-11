import getBgColor from '../../../methods/color/bgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getPlaceholderIconColor from '../../../methods/color/getPlaceholderIconColor';
import getTextColor from '../../../methods/color/textColor';
import getContext from '../../../methods/misc/getContext';

const colorModifier = props => {
    const vars = getComponentVars('avatar');
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';
    
    return `
        .fab-avatar {
            background: ${getBgColor(color, context)};
            color: ${getPlaceholderIconColor(color, context)};
        }

        .fab-avatar__initials {
            color: ${getTextColor(color, context)};
        }
    `;
};

export default colorModifier;