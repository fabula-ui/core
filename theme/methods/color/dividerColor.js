import Color from 'color';

// Commons
import { baseLuminosity } from '../../common/color.commons';

// Methods
import bgColor from './bgColor';
import textColor from './textColor';

const dividerColor = (color, context) => {
    const _bgColor = bgColor(color, context);
    const _textColor = textColor(color, context);
    const $bgColor = _bgColor === 'none' || !_bgColor ? Color('#FFF') : Color(_bgColor);
    const $textColor = Color(_textColor);

    if (context === 'clear') {
        if ($textColor.luminosity() > baseLuminosity) {
            return $textColor;
        } else {
            return $textColor.fade(.8);
        }
    } else {
        if ($bgColor.luminosity() > baseLuminosity) {
            return $bgColor.darken(.1);
        } else {
            if ($bgColor.isDark()) {
                return $bgColor.lighten(.25);
            } else {
                return $bgColor.darken(.15);
            }
        }
    }
}

export default dividerColor;