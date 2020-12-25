import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import { getGlobalVars } from '../misc/getGlobalVars';
import { getGradientColor } from './getGradientColor';

export const getBgColor = (color, context) => {
    const { baseColor } = getGlobalVars();
    const $color = color ? Color(color).rgb() : Color(baseColor).rgb();

    if (context === 'clear' || context === 'outline') {
        return 'transparent';
    } else if (context === 'darken') {
        return $color.darken(.15);
    } else if (context === 'disabled') {
        return $color.mix(Color(baseColor), .95);
    } else if (context === 'gradient') {
        return getGradientColor(color);
    } else if (context === 'invert') {
        if (Color($color).luminosity() > baseLuminosity) {
            return Color($color).darken(.75);
        } else {
            return Color(baseColor);
        }
    } else if (context === 'lighten') {
        return $color.lighten(.15);
    } else {
        return $color;
    }
}