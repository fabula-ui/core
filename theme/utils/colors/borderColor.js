import colorsCommons from '../common/colors';

// Utils
import bgColor from './bgColor';
import textColor from './textColor';

const Color = require('color');

const borderColor = (color, context) => {
    const { baseLuminosity } = colorsCommons;
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
    } else {
        if ($bgColor.isDark()) {
            return $bgColor.lighten(.1);
        } else {
            return $bgColor.darken(.1);
        }
    }
}

export default borderColor;