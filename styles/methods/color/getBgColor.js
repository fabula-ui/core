import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import getGradientColor from './getGradientColor';

const getBgColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');

    if (context === 'adapt') {
        if ($color.isLight()) {
            return $color.darken(.1);
        } else {
            return $color.lighten(.1);
        }
    } else if (context === 'clear') {
        return 'none';
    } else if (context === 'darken') {
        return $color.darken(.15);
    } else if (context === 'disabled') {
        return $color.mix(Color('white'), .95);
    } else if (context === 'faded') {
        return $color.mix(Color('white'), .5);
    } else if (context === 'fill') {
        return color;
    } else if (context === 'gradient') {
        return getGradientColor(color);
    } else if (context === 'invert') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.75);
        } else {
            return '#FFF';
        }
    } else if (context === 'outline') {
        return 'none';
    } else if (context === 'lighten') {
        return $color.lighten(.15);
    }
}

export default getBgColor;