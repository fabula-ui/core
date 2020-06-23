import Color from 'color';

// Methods
import getBgColor from './getBgColor';
import getTextColor from './getTextColor';

const getBorderColor = (color, context) => {
    const _bgColor = getBgColor(color, context);
    const $bgColor = _bgColor !== 'none' ? Color(_bgColor) : Color('#FFF');
    const _textColor = getTextColor(color, context);
    const $textColor = Color(_textColor);

    if (context === 'clear') {
        if ($textColor.isDark()) {
            return $textColor.lighten(.1);
        } else {
            return $textColor.darken(.1);
        }
    } else if (context === 'outline') {
        return getTextColor(color, context);
    } else if (context === 'invert') {
        return color;
    } else  {
        if ($bgColor.isDark()) {
            return $bgColor.lighten(.1);
        } else {
            return $bgColor.darken(.1);
        }
    }
}

export default getBorderColor;