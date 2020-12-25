import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

export const getActiveColor = (color, context) => {
    let $color;

    if (context === 'clear') {
        return 'transparent';
    } else if (context === 'gradient') {
        return color;
    } else {
        $color = Color(color).rgb();

        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.1);
        } else {
            if ($color.isLight()) {
                return $color.darken(.1);
            } else {
                return $color.lighten(.1);
            }
        }
    }
}