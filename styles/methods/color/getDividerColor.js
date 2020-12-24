import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import { getBgColor } from './getBgColor';
import { getTextColor } from './getTextColor';

export const getDividerColor = (color, context) => {
    return 'red';
    // const _bgColor = getBgColor(color, context);
    // const _textColor = getTextColor(color, context);
    // const $bgColor = _bgColor === 'none' || !_bgColor ? Color('#FFF') : Color(_bgColor);
    // const $textColor = Color(_textColor);

    // if (context === 'clear') {
    //     if ($textColor.luminosity() > baseLuminosity) {
    //         return $textColor.hex();
    //     } else {
    //         return $textColor.fade(.8).hex();
    //     }
    // } else {
    //     if ($bgColor.luminosity() > baseLuminosity) {
    //         return $bgColor.darken(.1).hex();
    //     } else {
    //         if ($bgColor.isDark()) {
    //             return $bgColor.lighten(.25).hex();
    //         } else {
    //             return $bgColor.darken(.15).hex();
    //         }
    //     }
    // }
}