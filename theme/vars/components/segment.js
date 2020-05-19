import colors from '../colors';
import globals from '../globals';

const segment = {
    ...globals,
    colors,

    // Component vars
    get activeFillColor() {
        return '#FFF'
    },
    get activeTextColor() {
        return this.colors['primary']
    },
    get inactiveFillColor() {
        return this.colors['light']
    },
    get inactiveTextColor() {
        return this.auxTextColor
    },
    get inactiveTextColor__hover() {
        return this.textColor
    },
    fontSize: '.9rem',
    paddingX: '1.5rem',
    paddingY: '.75rem'
}

export default segment;