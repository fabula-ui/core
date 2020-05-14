import Color from 'color';

// Commons
import { baseLuminosity } from '../../common/color.commons';

const glowColor = (color, context) => {
    const $color = Color(color).rgb();
    const fadeIntensity = {
        clear: {
            dark: .9,
            light: .95,
        },
        faded: {
            dark: .75,
            light: .9,
        },
        fill: {
            dark: .75,
            light: .9,
        },
        gradient: {
            dark: .75,
            light: .9,
        },
        invert: {
            dark: .9,
            light: .95,
        },
        outline: {
            dark: .9,
            light: .95,
        },
    };

    if (!color || $color.luminosity() > baseLuminosity) {
        return $color.fade(fadeIntensity[context].light);
    } else {
        return $color.fade(fadeIntensity[context].dark);
    }
}

export default glowColor;