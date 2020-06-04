import Color from 'color';

// Commons
import { baseLuminosity } from '../../common/color.commons';

// Methods
import gradientColor from './gradientColor';

const bgColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');

    if (context === 'adapt') {
        if ($color.isLight()) {
            return $color.darken(.1);
        } else {
            return $color.lighten(.1);
        }
    } else if (context === 'clear') {
        return 'none';
    } else if (context === 'darken') {
        return $color.darken(.2);
    } else if (context === 'disabled') {
        return $color.mix(Color('white'), .95);
    } else if (context === 'faded') {
        return $color.mix(Color('white'), .5);
    } else if (context === 'fill') {
        return color;
    } else if (context === 'gradient') {
        gradientColor(color);
    } else if (context === 'invert') {
        return textColor(color, 'fill');
    } else if (context === 'outline') {
        return 'none';
    } else if (context === 'lighten') {
        return $color.lighten(.2);
    }
}

const textColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');

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

export default bgColor;