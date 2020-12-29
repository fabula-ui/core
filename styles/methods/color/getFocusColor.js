import Color from 'color';

import { baseLuminosity } from '../../variables/core';

export const getFocusColor = (backgroundColor) => {
    const $color = Color(backgroundColor).rgb();

    if ($color.luminosity() > baseLuminosity) {
        return $color.darken(.015).fade(.3);
    } else {
        return $color.fade(.3);
    }
}