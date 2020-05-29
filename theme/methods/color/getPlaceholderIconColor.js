import Color from 'color';

const getPlaceholderIconColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');
    const intensity = context === 'adapt' ? .25 : .15;

    if ($color.isLight()) {
        return $color.darken(intensity);
    } else {
        return $color.lighten(intensity + .2);
    }
}

export default getPlaceholderIconColor;