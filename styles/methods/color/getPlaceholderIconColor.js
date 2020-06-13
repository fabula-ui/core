import Color from 'color';

// Commons
import { baseLuminosity } from '../../common/color.commons';

// Methods
import getBgColor from '../../methods/color/bgColor';

const getPlaceholderIconColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');
    const $bgColor = color ? Color(getBgColor(color, context)) : Color('#FFF');
    // const intensity = context === 'adapt' ? .15 : .15;

    if ($color.luminosity() > baseLuminosity) {
        return $bgColor.darken(.1);
    } else {
        if ($color.isLight()) {
            return $bgColor.darken(.15);
        } else {
            return $bgColor.lighten(.15);
        }
    }
}

export default getPlaceholderIconColor;