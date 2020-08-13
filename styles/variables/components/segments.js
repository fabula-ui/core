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
    fontWeight: 400,
    get inactiveFillColor() {
        return this.colors['light']
    },
    get inactiveTextColor() {
        return this.auxTextColor
    },
    paddingX: '1.5rem',
    paddingY: '.75rem',
    get paddingBottom() {
        return this.paddingY
    },
    get paddingLeft() {
        return this.paddingX
    },
    get paddingRight() {
        return this.paddingX
    },
    get paddingTop() {
        return this.paddingY
    },
}

export default tabs;