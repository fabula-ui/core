import Color from 'color';

const focusColor = (backgroundColor) => {
    const $color = Color(backgroundColor).rgb();

    if ($color.luminosity() > baseLuminosity) {
        return $color.darken(.015).fade(.3);
    } else {
        return $color.fade(.3);
    }
}

export default focusColor;