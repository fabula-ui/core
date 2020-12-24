import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import { getGradientColor } from './getGradientColor';

export const getBgColor = (color, context) => {
    const $color = color || '#ffffff';

    if (context === 'adapt') {
        if (Color($color).isLight()) {
            return Color($color).darken(.1).hex();
        } else {
            return Color($color).lighten(.1).hex();
        }
    } else if (context === 'darken') {
        return Color($color).darken(.15).hex();
    } else if (context === 'disabled') {
        return Color($color).mix(Color('white'), .95).hex();
    } else if (context === 'faded') {
        return Color($color).mix(Color('white'), .5).hex();
    } else if (context === 'fill') {
        return Color(color);
    } else if (context === 'gradient') {
        return Color(getGradientColor(color)).hex();
    } else if (context === 'invert') {
        if (Color($color).luminosity() > baseLuminosity) {
            return Color($color).darken(.75).hex();
        } else {
            return Color('#ffffff').hex();
        }
    } else if (context === 'clear' || context === 'outline') {
        return 'transparent';
    } else if (context === 'lighten') {
        return Color($color).lighten(.15).hex();
    } else {
        return Color($color).hex();
    }
}