import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import getBgColor from './getBgColor';
import getGradientColor from './getGradientColor';

const getHoverColor = (color, context) => {
    let $color = color ? Color(color).rgb() : Color('#FFF');
    
    if (color && (context === 'darken' || context === 'lighten')) {
        $color = getBgColor(color, context);
    } 

    if (context === 'clear') {
        return 'none';
    } else if (context === 'faded') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.1).mix(Color('white'), .6);
        } else {
            return $color.mix(Color('white'), .6);
        }
    } else if (context === 'darken' || context === 'fill' || context === 'gradient_glow' || context === 'lighten') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.05);
        } else {
            return $color.mix(Color('#FFF'), .2);
        }
    } else if (context === 'gradient') {
        if ($color.luminosity() > baseLuminosity) {
            return getGradientColor($color.darken(.05));
        } else {
            return getGradientColor($color.lighten(.2));
        }
    } else if (context === 'invert') {
        if ($color.luminosity() > baseLuminosity) {
            return getBgColor(color, 'invert').lighten(.2);
        } else {
            return Color(getBgColor(color, 'fill')).mix(Color('#FFF'), .8);
        }
    } else if (context === 'outline') {
        if (!color) {
            return getBgColor(color, 'invert');
        } else if (color && $color.luminosity() > baseLuminosity) {
            return $color.darken(.05);
        } else {
            return $color;
        }
    }
}

export default getHoverColor;