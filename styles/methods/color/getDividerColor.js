import Color from 'color';

// Commons
import { baseLuminosity } from '../../variables/core';

// Methods
import { getBgColor } from './getBgColor';
import { getTextColor } from './getTextColor';

export const getDividerColor = (color, context) => {
    const _bgColor = getBgColor(color, context);
    const _textColor = getTextColor(color, context);
    const $bgColor = _bgColor === 'none' || !_bgColor ? Color('#FFF') : Color(_bgColor);
    const $textColor = Color(_textColor);
    let output;

    if (context === 'clear') {
        if ($textColor.luminosity() > baseLuminosity) {
            output = $textColor;
        } else {
            output = $textColor.fade(.8);
        }
    } else {
        if ($bgColor.luminosity() > baseLuminosity) {
            output = $bgColor.darken(.1);
        } else {
            if ($bgColor.isDark()) {
                output = $bgColor.lighten(.25);
            } else {
                output = $bgColor.darken(.15);
            }
        }
    }

    return output.hex();
}