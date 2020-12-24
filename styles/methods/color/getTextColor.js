import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import { getBgColor } from './getBgColor';
import { getGlobalVars } from '../misc/getGlobalVars';

export const getTextColor = (color, context) => {
    const { baseColor } = getGlobalVars();
    const $color = color ? Color(color) : Color(baseColor);

    if (context === 'clear' || context === 'outline') {
        if (!color) {
            return getTextColor(color, 'fill');
        } else {
            return $color.hex();
        }
    } else if (context === 'invert') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.hex();
        } else {
            return getBgColor(color, 'fill');
        }
    } else {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.75).hex();
        } else {
            return Color('#ffffff').hex();
        }
    }
}