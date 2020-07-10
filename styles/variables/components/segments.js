import colors from '../colors';
import globals from '../globals';

const tabs = {
    ...globals,
    colors,

    // Component vars
    get activeFillColor() {
        return '#FFF'
    },
    get activeTextColor() {
        return this.colors['primary']
    },
    get borderColor() {
        return this.colors['light']
    },
    fontSize: '.9rem',
    fontWeight: 500,
    get inactiveFillColor() {
        return this.colors['light']
    },
    get inactiveTextColor() {
        return this.auxTextColor
    },
    get inactiveTextColor__hover() {
        return this.textColor
    },
    paddingX: '1.5rem',
    paddingY: '.75rem'
}

export default tabs;