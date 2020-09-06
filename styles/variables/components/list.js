import Color from 'color';

import colors from '../colors';
import globals from '../globals';

const list = theme => ({
    ...globals,
    colors,

    color: '#FFF',
    paddingX: '1rem',
    paddingY: '1rem',
    get padding() {
        return `${this.paddingY} ${this.paddingX}`
    },
    get stripeColor() {
        return Color(this.colors.primary).desaturate(.5).mix(Color('#FFF'), .925);
    }
})

export default list;