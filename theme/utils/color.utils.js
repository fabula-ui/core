const Color = require('color');

const baseLuminosity = .65;

export const activeColor = (color, context, textColor) => {
    const $color = Color(color).rgb();

    if (context === 'clear') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.1).mix(Color('#FFF'), .7);
        } else {
            return $color.mix(Color('#FFF'), .7);
        }
    } else if (context === 'faded') {
        if ($color.luminosity() > baseLuminosity) {
            return hoverColor(color, context).darken(.1);
        } else {
            return hoverColor(color, context).darken(.1);
        }
    } else if (context === 'fill') {
        if ($color.luminosity() > baseLuminosity) {
            return $color.darken(.1);
        } else {
            if ($color.isLight()) {
                return $color.darken(.1);
            } else {
                return $color.lighten(.5);
            }
        }
    } else if (context === 'invert') {
        return $color.mix(Color(textColor), .8);
    } else if (context === 'outline') {
        return hoverColor(color, context).darken(.1);
    }
}

export const bgColor = (color, context) => {
    const $color = Color(color).rgb();

    if (context === 'clear') {
        return 'none';
    } else if (context === 'faded') {
        return $color.mix(Color('white'), .5);
    } else if (context === 'fill') {
        return color;
    } else if (context === 'invert') {
        return textColor(color, 'fill');
    } else if (context === 'outline') {
        return 'none';
    }
}

export const dividerColor = bgColor => {
    const $bgColor = Color(bgColor).rgb();

    if ($bgColor.luminosity() > .3) {
        return $bgColor.darken(.1);
    } else {
        return $bgColor.lighten(.1);
    }
}

export const elementColor = (theme, bgColor, elementName) => {
    const elementColors = theme.elements[elementName].colors;
    const $bgColor = Color(bgColor).rgb();

    if ($bgColor.luminosity() > baseLuminosity) {
        return elementColors.light;
    } else {
        return elementColors.dark;
    }
};

export const focusColor = (backgroundColor) => {
    const $color = Color(backgroundColor).rgb();

    if ($color.luminosity() > baseLuminosity) {
        return $color.darken(.015).fade(.3);
    } else {
        return $color.fade(.3);
    }
}

export const focusGlowColor = (color, context) => {
    const fadeIntensity = {
        clear: .7,
        faded: .7,
        fill: .5,
        gradient: .5,
        invert: .7,
        outline: .7
    };
    const passContext = context === 'gradient' ? 'gradient_glow' : context;
    const $hoverColor = hoverColor(color, passContext);

    return $hoverColor.darken(.25).fade(fadeIntensity[context]);
}

export const glareColor = (theme, bgColor) => {
    const $bgColor = Color(bgColor).rgb();

    if ($bgColor.luminosity() > baseLuminosity) {
        return theme.globals.glareColor.light;
    } else {
        return theme.globals.glareColor.dark;
    }
}

export const glowColor = (color, context) => {
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

export const gradientColor = color => {
    const $color = color ? Color(color).rgb() : Color('#FFF').rgb();
    const intensity = color ? .2 : .1;
    const $darkColor = $color.darken(intensity);
    const $lightColor = $color.lighten(intensity);

    if ($color.luminosity() > baseLuminosity) {
        return `linear-gradient(135deg, ${$color}, ${$darkColor})`;
    } else {
        return `linear-gradient(135deg, ${$color}, ${$lightColor})`;
    }
}

export const hoverColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');

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

export const hoverTextColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');

    if (context === 'clear') {
        return $color.darken(.2);
    } else if (context === 'faded') {
        return $color.darken(.4);
    } else if (context === 'invert') { 
        if ($color.luminosity() > baseLuminosity) {
            return textColor(color, 'invert');
        } else {
            return textColor(color, 'faded');
        }
    } else if (context === 'outline') {
        if (!color) {
            return textColor(color, 'invert');
        } else {
            return textColor(color, 'fill');
        }
    }
}

export const placeholderColor = bgColor => {
    const $bgColor = Color(bgColor).rgb();

    if ($bgColor.luminosity() > baseLuminosity) {
        return $bgColor.darken(.1);
    } else {
        if ($bgColor.isLight()) {
            return 'rgba(255, 255, 255, .3)';
        } else {
            return 'rgba(255, 255, 255, .15)';
        }
    }
}

export const textColor = (color, context) => {
    const $bgColor = color ? Color(color).rgb() : Color('#FFF');

    if (context === 'clear') {
        return $bgColor;
    } else if (context === 'faded') {
        return $bgColor.darken(.4);
    } else if (context === 'fill' || context === 'gradient') {
        if ($bgColor.luminosity() > baseLuminosity) {
            return $bgColor.darken(.75);
        } else {
            return '#FFF';
        }
    } else if (context === 'invert') {
        if ($bgColor.luminosity() > baseLuminosity) {
            return $bgColor;
        } else {
            return bgColor(color, 'fill');
        }
    }
}
    // } else {
    //     if ($bgColor.luminosity() > baseLuminosity) {
    //         return $bgColor.darken(.75);
    //     } else {
    //         return '#FFF';
    //     }
    // }