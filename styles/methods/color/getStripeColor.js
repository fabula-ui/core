import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import getBgColor from './getBgColor';

const stripeColor = (color, context) => {
    const _bgColor = getBgColor(color, context);
    const $bgColor = color ? Color(_bgColor) : Color('#FFF');

    if ($bgColor.luminosity() > baseLuminosity) {
        return $bgColor.darken(.03);
    } else {
        return $bgColor.darken(.05);
    }

}

export default stripeColor;