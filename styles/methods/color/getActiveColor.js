import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import getBgColor from './getBgColor';
import getHoverColor from './getHoverColor';

const getActiveColor = (color, context) => {
    let $color = color ? Color(color).rgb() : Color('#FFF');

    if (color && (context === 'darken' || context === 'lighten')) {
        $color = getBgColor(color, context);
    } 

    if (context === 'clear') {
        return 'none';
    } else if (context === 'faded') {
        if ($color.luminosity() > baseLuminosity) {
            return getHoverColor(color, context).darken(.1);
        } else {
            return getHoverColor(color, context).darken(.1);
        }
    } else if (context === 'fill') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.1);
        } else {
            if ($color.isLight()) {
                return $color.darken(.1);
            } else {
                return $color.lighten(.5);
            }
        }
    } else if (context === 'invert') {
        return getHoverColor(color, context).darken(.1);
    } else if (context === 'lighten') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.lighten(.1);
        } else {
            if ($color.isLight()) {
                return $color.darken(.1);
            } else {
                return $color.lighten(.5);
            }
        }
    } else if (context === 'outline') {
        return getHoverColor(color, context).darken(.1);
    }
}

export default getActiveColor;