import Color from 'color';

// Methods
import { getHoverColor } from './getHoverColor';

export const getFocusGlowColor = (hoverColor, bgColor, context) => {
    const fadeIntensity = {
        clear: .7,
        darken: .7,
        faded: .7,
        fill: .5,
        gradient: .5,
        invert: .7,
        lighten: .7,
        outline: .5
    };
    const color = (context === 'gradient' || context === 'invert') ? getHoverColor(bgColor, 'gradient_glow') : hoverColor;

    if (context === 'clear') {
        return 'transparent';
    } else {
        return Color(color).darken(.25).fade(fadeIntensity[context]);
    }
}