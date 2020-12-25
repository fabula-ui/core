import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import { getGlobalVars } from '../misc/getGlobalVars';

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
    } else if (context === 'invert') {
        if ($color.luminosity() > baseLuminosity) {
            return Color(textColor).fade(.85);
        } else {
            if ($color.isDark()) {
                return $color.lighten(.2);
            } else {
                return $color.darken(.2);
            }
        }
    } else if (context === 'outline') {
        return Color(baseColor).mix(Color(textColor), .1);
    } else {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.05);
        } else {
            return $color.mix(Color(baseColor), .2);
        }
    }
}