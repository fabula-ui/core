import colorsCommons from '../common/colors';

const Color = require('color');

const placeholderColor = color => {
    const $color = color ? Color(color).rgb() : Color('#FFF');
    const { baseLuminosity } = colorsCommons;

    if ($color.luminosity() > baseLuminosity) {
        return $color.darken(.5);
    } else {
        return $color.mix(Color('white'), .4);
    }
}

export default placeholderColor;