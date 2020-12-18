import Color from 'color';

// Methods
import { getBgColor } from './getBgColor';
import { getTextColor } from './getTextColor';

const getBorderColor = (color, context) => {
    const _bgColor = getBgColor(color, context);
    const $bgColor = _bgColor !== 'none' ? Color(_bgColor) : Color('#FFF');
    const _textColor = getTextColor(color, context);
    const $textColor = Color(_textColor);
    let hex = false;
    let output;

    if (context === 'clear') {
        if ($textColor.isDark()) {
            output = $textColor.lighten(.1);
        } else {
            output = $textColor.darken(.1);
        }
    } else if (context === 'outline') {
        output = getTextColor(color, context);
    } else if (context === 'invert') {
        hex = true;
        output = color;
    } else  {
        if ($bgColor.isDark()) {
            output = $bgColor.lighten(.1);
        } else {
            output = $bgColor.darken(.1);
        }
    }

    return hex ? output : output.hex();
}

export default getBorderColor;