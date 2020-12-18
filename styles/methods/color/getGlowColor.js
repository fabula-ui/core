import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

export const getGlowColor = (color, context) => {
    const $color = Color(color)
    const fadeIntensity = {
        clear: {
            dark: .9,
            light: .95,
        },
        darken: {
            dark: .75,
            light: .95,
        },
        faded: {
            dark: .75,
            light: .9,
        },
        fill: {
            dark: .75,
            light: .95,
        },
        gradient: {
            dark: .75,
            light: .9,
        },
        invert: {
            dark: .9,
            light: .95,
        },
        lighten: {
            dark: .75,
            light: .95,
        },
        outline: {
            dark: .9,
            light: .95,
        }
    };

    if (context === 'clear') {
        return 'transparent';
    } else if (!color || $color.luminosity() > baseLuminosity) {
        return $color.darken(.05).hex();
    } else {
        return $color.fade(fadeIntensity[context].dark).hex();
    }
}