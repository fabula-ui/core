import colorsCommons from '../common/colors';

// Utils
import bgColor from './bgColor';

const Color = require('color');

const textColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');
    const { baseLuminosity } = colorsCommons;

    if (context === 'clear') {
        if (!color) {
            return textColor(color, 'fill');
        } else {
            return $color;
        }
    } else if (context === 'faded') {
        return $color.darken(.4);
    } else if (context === 'fill' || context === 'gradient') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.75);
        } else {
            return '#FFF';
        }
    } else if (context === 'invert') {
        if ($color.luminosity() > baseLuminosity) {
            return $color;
        } else {
            return bgColor(color, 'fill');
        }
    }
}

export default textColor;