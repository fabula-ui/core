import colors from '../colors';
import globals from '../globals';

const tooltip = {
    ...globals,
    colors,

    get color() {
        return colors['dark']
    },
    spacing: '.75em'
}

export default tooltip;