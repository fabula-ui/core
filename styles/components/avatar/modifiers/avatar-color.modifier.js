import getBgColor from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getPlaceholderIconColor from '../../../methods/color/getPlaceholderIconColor';
import getTextColor from '../../../methods/color/getTextColor';

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

        // External
        .fab-avatar .fab-inner-icon {
            background: ${getPlaceholderIconColor(color, context)};
        }
    `;
};

export default colorModifier;