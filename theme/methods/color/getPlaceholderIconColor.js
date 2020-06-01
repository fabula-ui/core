import Color from 'color';

// Commons
import { baseLuminosity } from '../../common/color.commons';

const getPlaceholderIconColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');
    const intensity = context === 'adapt' ? .2 : .1;

    if ($color.luminosity() > baseLuminosity) {
        return $color.darken(intensity);
    } else {
        if ($color.isLight()) {
            return $color.darken(intensity + .1);
        } else {
            return $color.lighten(intensity + .1);
        }
        
    }
}

export default getPlaceholderIconColor;