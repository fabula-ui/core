import Color from 'color';

// Commons
import { baseLuminosity } from '../../common/color.commons';

// Methods
import bgColor from './bgColor';

const stripeColor = (color, context) => {
    const _bgColor = bgColor(color, context);
    const $bgColor = color ? Color(_bgColor) : Color('#FFF');

    if ($bgColor.luminosity() > baseLuminosity) {
        return $bgColor.mix(Color('#000'), .03);
    } else {
        return $bgColor.mix(Color('#000'), .05);
    }

}

export default stripeColor;