const Color = require('color');

const bgColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');

    if (context === 'clear') {
        return 'none';
    } else if (context === 'disabled') {
        return $color.mix(Color('white'), .95);
    } else if (context === 'faded') {
        return $color.mix(Color('white'), .5);
    } else if (context === 'fill') {
        return color;
    } else if (context === 'invert') {
        return textColor(color, 'fill');
    } else if (context === 'outline') {
        return 'none';
    }
}

export default bgColor;