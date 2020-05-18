import Color from 'color';

import { baseLuminosity } from '../../common/color.commons';

const focusColor = (backgroundColor) => {
    const $color = Color(backgroundColor).rgb();

    if ($color.luminosity() > baseLuminosity) {
        return $color.darken(.015).fade(.3);
    } else {
        return $color.fade(.3);
    }
}

export default focusColor;