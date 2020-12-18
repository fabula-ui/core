import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import { getBgColor } from './getBgColor';

export const getTextColor = (color, context) => {
    let $color = color ? Color(color) : Color('#ffffff');

    if (color && (context === 'darken' || context === 'lighten')) {
        $color = Color(getBgColor(color, context));
    }

    if (context === 'faded') {
        return $color.darken(.4).hex();
    } else if (context === 'darken' || context === 'fill' || context === 'gradient' || context === 'lighten') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.75).hex();
        } else {
            return '#ffffff';
        }
    } else if (context === 'invert') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.hex();
        } else {
            return getBgColor(color, 'fill');
        }
    } else if (context === 'clear' || context === 'outline') {
        if (!color) {
            return getTextColor(color, 'fill');
        } else {
            return $color.hex();
        }
    } else {
        return $color.hex();
    }
}