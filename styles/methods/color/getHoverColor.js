import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import { getBgColor } from './getBgColor';
import { getGlobalVars } from '../misc/getGlobalVars';
import { getGradientColor } from './getGradientColor';

export const getHoverColor = (color, textColor, context) => {
    const { baseColor } = getGlobalVars();
    let $color;

    if (!color) {
        $color = Color(baseColor).rgb();
    } else if (context !== 'clear' && context !== 'gradient') {
        $color = Color(color).rgb();
    }

    if (context === 'clear') {
        return 'transparent';
    } else if (context === 'gradient') {
        return color;
    } else if (context === 'outline') {
        return Color(baseColor).mix(Color(textColor), .1);
    } else {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.05);
        } else {
            return $color.mix(Color(baseColor), .2);
        }
    }
    // if (context === 'clear') {
    //     return 'none';
    // } else if (context === 'faded') {
    //     if ($color.luminosity() > baseLuminosity) {
    //         return $color.darken(.1).mix(Color('white'), .5);
    //     } else {
    //         return $color.mix(Color('white'), .5);
    //     }
    // } else if (context === 'darken' || context === 'fill' || context === 'gradient_glow' || context === 'lighten') {
    //     if ($color.luminosity() > baseLuminosity) {
    //         return $color.darken(.05);
    //     } else {
    //         return $color.mix(Color('#FFF'), .2);
    //     }
    // } else if (context === 'gradient') {
    //     if ($color.luminosity() > baseLuminosity) {
    //         return getGradientColor($color.darken(.05));
    //     } else {
    //         return getGradientColor($color.lighten(.2));
    //     }
    // } else if (context === 'invert') {
    //     if ($color.luminosity() > baseLuminosity) {
    //         return 'red';
    //     } else {
    //         return Color(getBgColor(color, 'fill')).mix(Color('#FFF'), .2);
    //     }
    // } else if (context === 'outline') {
    //     if (!color) {
    //         return getBgColor(color, 'invert');
    //     } else if (color && $color.luminosity() > baseLuminosity) {
    //         return $color.darken(.05);
    //     } else {
    //         return $color;
    //     }
    // }
}