import Color from 'color';

// Methods
import bgColor from './bgColor';
import textColor from './textColor';

const borderColor = (color, context) => {
    const _bgColor = bgColor(color, context);
    const $bgColor = _bgColor !== 'none' ? Color(_bgColor) : Color('#FFF');
    const _textColor = textColor(color, context);
    const $textColor = Color(_textColor);

    if (context === 'clear') {
        if ($textColor.isDark()) {
            return $textColor.lighten(.1);
        } else {
            return $textColor.darken(.1);
        }
    } else if (context === 'outline') {
        return textColor(color, context);
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

export default borderColor;