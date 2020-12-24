// Methods
import { getTextColor } from './getTextColor';

export const getHoverTextColor = (color, context) => {
    if (context === 'outline') {
        if (color) {
            return getTextColor(color, 'fill');
        } else {
            return getTextColor(color, 'invert');
        }
    } else {
        return getTextColor(color, context);
    }
}