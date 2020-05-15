import Color from 'color';

// Commons
import { baseLuminosity } from '../../common/color.commons';

// Methods
import textColor from './textColor';

const hoverTextColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');

    if (context === 'outline') {
        if (color) {
            return textColor(color, 'fill');
        } else {
            return textColor(color, 'invert');
        }
    } else {
        return textColor(color, context);
    }
    
}

export default hoverTextColor;