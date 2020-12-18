import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import { getGradientColor } from './getGradientColor';

export const getBgColor = (color, context) => {
    const $color = color ? Color(color) : Color('#ffffff');

    if (context === 'adapt') {
        if ($color.isLight()) {
            return $color.darken(.1).hex();
        } else {
            return $color.lighten(.1).hex();
        }
    } else if (context === 'darken') {
        return $color.darken(.15).hex();
    } else if (context === 'disabled') {
        return $color.mix(Color('white'), .95).hex();
    } else if (context === 'faded') {
        return $color.mix(Color('white'), .5).hex();
    } else if (context === 'fill') {
        return color;
    } else if (context === 'gradient') {
        return getGradientColor(color).hex();
    } else if (context === 'invert') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.75).hex();
        } else {
            return '#ffffff';
        }
    } else if (context === 'clear' || context === 'outline') {
        return 'transparent';
    } else if (context === 'lighten') {
        return $color.lighten(.15).hex();
    } else {
        return $color.hex();
    }
}