import colorsCommons from '../common/colors';

const Color = require('color');

const gradientColor = color => {
    const $color = color ? Color(color).rgb() : Color('#FFF').rgb();
    const { baseLuminosity } = colorsCommons;
    const intensity = color ? .2 : .1;
    const $darkColor = $color.darken(intensity);
    const $lightColor = $color.lighten(intensity);

    if ($color.luminosity() > baseLuminosity) {
        return `linear-gradient(135deg, ${$color}, ${$darkColor})`;
    } else {
        return `linear-gradient(135deg, ${$color}, ${$lightColor})`;
    }
}

export default gradientColor;