import Color from 'color';

// Commons
import { baseLuminosity } from '../../common/color.commons';

const gradientColor = color => {
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

export default gradientColor;