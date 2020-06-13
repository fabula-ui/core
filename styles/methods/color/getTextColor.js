import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import getBgColor from './getBgColor';

const getTextColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');

    if (context === 'faded') {
        return $color.darken(.4);
    } else if (context === 'darken' || context === 'fill' || context === 'gradient') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.75);
        } else {
            return '#FFF';
        }
    } else if (context === 'invert') {
        if ($color.luminosity() > baseLuminosity) {
            return $color;
        } else {
            return getBgColor(color, 'fill');
        }
    } else if (context === 'clear' || context === 'outline') {
        if (!color) {
            return getTextColor(color, 'fill');
        } else {
            return $color;
        }
    }
}

export default getTextColor;