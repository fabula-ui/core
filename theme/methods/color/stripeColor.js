import Color from 'color';

// Commons
import { baseLuminosity } from '../../common/color.commons';

// Methods
import bgColor from './bgColor';

const stripeColor = (color, context) => {
    const _bgColor = bgColor(color, context);
    const $bgColor = color ? Color(_bgColor) : Color('#FFF');

    if ($bgColor.luminosity() > baseLuminosity) {
        return $bgColor.darken(.03);
    } else {
        return $bgColor.darken(.05);
    }

}

export default stripeColor;