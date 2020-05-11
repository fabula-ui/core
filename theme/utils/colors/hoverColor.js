// Commons
import colorsCommons from '../common/colors';

// Utils
import bgColor from './bgColor';
import gradientColor from './gradientColor';

const Color = require('color');

const hoverColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');
    const { baseLuminosity } = colorsCommons;

    if (context === 'clear') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.3).mix(Color('#FFF'), .8);
        } else {
            return $color.mix(Color('#FFF'), .8);
        }
    } else if (context === 'faded') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.1).mix(Color('white'), .6);
        } else {
            return $color.mix(Color('white'), .6);
        }
    } else if (context === 'fill' || context === 'gradient_glow') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.05);
        } else {
            return $color.mix(Color('#FFF'), .2);
        }
    } else if (context === 'gradient') {
        if ($color.luminosity() > baseLuminosity) {
            return gradientColor($color.darken(.05));
        } else {
            return gradientColor($color.lighten(.2));
        }
    } else if (context === 'invert') {
        if ($color.luminosity() > baseLuminosity) {
            return bgColor(color, 'invert').lighten(.2);
        } else {
            return bgColor(color, 'faded');
        }
    } else if (context === 'outline') {
        if (!color) {
            return bgColor(color, 'invert');
        } else if (color && $color.luminosity() > baseLuminosity) {
            return $color.darken(.05);
        } else {
            return $color;
        }
    }
}

export default hoverColor;