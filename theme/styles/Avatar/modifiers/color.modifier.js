import getBgColor from '../../../methods/color/bgColor';
import getColorName from '../../../methods/color/getColor';
import getPlaceholderIconColor from '../../../methods/color/getPlaceholderIconColor';
import textColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const { adaptColor, color } = props;
    const { bgColor, colors } = window.__FABTheme.variables.components.avatar;
    const colorName = getColorName(color || bgColor, colors);
    
    return `
        .fab-avatar {
            background: ${getBgColor(colorName, adaptColor ? 'adapt' : 'fill')};
            color: ${getPlaceholderIconColor(colorName, adaptColor ? 'adapt' : 'fill')}
        }

        .fab-avatar__initials {
            color: ${textColor(colorName, 'fill')};
        }

        // External
        .fab-avatar .fab-icon {
            
        }
    `;
};

export default colorModifier;