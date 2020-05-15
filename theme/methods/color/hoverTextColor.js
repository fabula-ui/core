import Color from 'color';

// Commons
import { baseLuminosity } from '../../common/color.commons';

// Methods
import textColor from './textColor';

const hoverTextColor = (color, context) => {
    const $color = color ? Color(color).rgb() : Color('#FFF');

    return textColor(color, context);
}

export default hoverTextColor;