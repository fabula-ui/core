import getBgColor from '../../../methods/color/bgColor';
import getColorName from '../../../methods/color/getColor';
import getPlaceholderIconColor from '../../../methods/color/getPlaceholderIconColor';
import textColor from '../../../methods/color/textColor';
import getContext from '../../../methods/misc/getContext';

const colorModifier = props => {
    const { adaptColor, color } = props;
    const { bgColor, colors } = window.__FABTheme.variables.components.avatar;
    const colorName = getColorName(color || bgColor, colors);
    const context = getContext(props);
    
    return `
        .fab-avatar {
            background: ${getBgColor(colorName, context)};
            color: ${getPlaceholderIconColor(colorName, context)}
        }

        .fab-avatar__initials {
            color: ${textColor(colorName, context)};
        }

        // External
        .fab-avatar .fab-icon {
            
        }
    `;
};

export default colorModifier;