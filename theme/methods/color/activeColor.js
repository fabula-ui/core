import Color from 'color';

// Commons
import { baseLuminosity } from '../../common/color.commons';

// Methods
import hoverColor from './hoverColor';

const activeColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');

    if (context === 'clear') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.1).mix(Color('#FFF'), .7);
        } else {
            return $color.mix(Color('#FFF'), .7);
        }
    } else if (context === 'faded') {
        if ($color.luminosity() > baseLuminosity) {
            return hoverColor(color, context).darken(.1);
        } else {
            return hoverColor(color, context).darken(.1);
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
        return hoverColor(color, context).darken(.1);
    } else if (context === 'outline') {
        return hoverColor(color, context).darken(.1);
    }
}

export default activeColor;