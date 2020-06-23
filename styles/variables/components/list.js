import Color from 'color';

import colors from '../colors';
import globals from '../globals';

const list = {
    ...globals,
    colors,
    padding: '1rem',
    get stripeColor() {
        return Color(colors['primary']).desaturate(.5).mix(Color('#FFF'), .925);
    }
}

export default list;