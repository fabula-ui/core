import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import { getBgColor } from '../../methods/color/getBgColor';

export const getPlaceholderIconColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');
    const $bgColor = color ? Color(color).rgb() : Color('#FFF');

    if ($color.luminosity() > baseLuminosity) {
        return $bgColor.darken(.1).hex();
    } else {
        if ($color.isLight()) {
            return $color.darken(.15).hex();
        } else {
            return $color.lighten(.15).hex();
        }
    }
}