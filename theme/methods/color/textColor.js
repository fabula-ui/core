import Color from 'color';

// Commons
import { baseLuminosity } from '../../common/color.commons';

// Methods
import bgColor from './bgColor';

const textColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');

    if (context === 'faded') {
        return $color.darken(.4);
    } else if (context === 'fill' || context === 'gradient') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.75);
        } else {
            return '#FFF';
        }
    } else if (context === 'invert') {
        if ($color.luminosity() > baseLuminosity) {
            return $color;
        } else {
            return bgColor(color, 'fill');
        }
    } else if (context === 'clear' || context === 'outline') {
        if (!color) {
            return textColor(color, 'fill');
        } else {
            return $color;
        }
    }
}

export default textColor;