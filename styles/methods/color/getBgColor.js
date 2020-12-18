import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import getGradientColor from './getGradientColor';

export const getBgColor = (color, context) => {
    const $color = color ? Color(color) : Color('#FFF');
    let hex = false;
    let output;

    if (context === 'adapt') {
        if ($color.isLight()) {
            output = $color.darken(.1);
        } else {
            output = $color.lighten(.1);
        }
    } else if (context === 'darken') {
        output = $color.darken(.15);
    } else if (context === 'disabled') {
        output = $color.mix(Color('white'), .95);
    } else if (context === 'faded') {
        output = $color.mix(Color('white'), .5);
    } else if (context === 'fill') {
        hex = true;
        output = color;
    } else if (context === 'gradient') {
        output = getGradientColor(color);
    } else if (context === 'invert') {
        if ($color.luminosity() > baseLuminosity) {
            output = $color.darken(.75);
        } else {
            hex = true;
            output = '#FFF';
        }
    } else if (context === 'clear' || context === 'outline') {
        hex = true;
        output = 'none';
    } else if (context === 'lighten') {
        output = $color.lighten(.15);
    } else {
        output = $color;
    }

    return hex ? output : output.hex();
}