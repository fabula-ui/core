import Color from 'color';

// Commons
import { baseLuminosity } from '../../common/color.commons';

const placeholderColor = color => {
    const $color = color ? Color(color).rgb() : Color('#FFF');

    if ($color.luminosity() > baseLuminosity) {
        return $color.darken(.5);
    } else {
        return $color.mix(Color('white'), .4);
    }
}

export default placeholderColor;