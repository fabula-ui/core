import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import { getBgColor } from './getBgColor';

export const getBorderColor = (color, textColor, context) => {
    const handledContext = context === 'clear' || context === 'gradient' ? 'fill' : context;
    const $color = Color(getBgColor(color, handledContext));

    if (context === 'outline') {
        return textColor;
    } else if (context === 'invert') {
        if (Color($color).luminosity() > baseLuminosity) {
            return textColor;
        } else {
            if ($color.isDark()) {
                return $color.lighten(.1).hex();
            } else {
                return $color.darken(.1).hex();
            }
        }
        
    } else {
        if ($color.isDark()) {
            return $color.lighten(.1).hex();
        } else {
            return $color.darken(.1).hex();
        }
    }
}