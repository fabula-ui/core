import Color from 'color';

// Methods
import { getGlobalVars } from '../misc/getGlobalVars';

export const getHoverTextColor = (textColor, context) => {
    const { baseColor } = getGlobalVars();

    if (context === 'clear') {
        return 'none';
    } else if (context === 'outline') {
        if (Color(baseColor).contrast(Color(textColor)) < 2) {
            return textColor;
        } else {
            return Color(baseColor).mix(Color(textColor), .9);
        }
    } else {
        return textColor;
    }
}