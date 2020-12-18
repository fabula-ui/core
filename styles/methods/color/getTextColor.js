import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import { getBgColor } from './getBgColor';

export const getTextColor = (color, context) => {
    let $color = color ? Color(color) : Color('#ffffff');
    let hex = false;
    let output;

    if (color && (context === 'darken' || context === 'lighten')) {
        $color = getBgColor(color, context);
    }

    if (context === 'faded') {
        output = $color.darken(.4);
    } else if (context === 'darken' || context === 'fill' || context === 'gradient' || context === 'lighten') {
        if ($color.luminosity() > baseLuminosity) {
            output = $color.darken(.75);
        } else {
            hex = true;
            output = '#ffffff';
        }
    } else if (context === 'invert') {
        if ($color.luminosity() > baseLuminosity) {
            output = $color;
        } else {
            output = getBgColor(color, 'fill');
        }
    } else if (context === 'clear' || context === 'outline') {
        if (!color) {
            output = getTextColor(color, 'fill');
        } else {
            output = $color;
        }
    } else {
        output = $color;
    }

    return hex ? output : output.hex();
}