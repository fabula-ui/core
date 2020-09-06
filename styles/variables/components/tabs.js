import colors from '../colors';
import globals from '../globals';

const tabs = theme => ({
    ...globals,
    colors,

    // Component vars
    get activeBorderColor() {
        return this.colors['primary']
    },
    get activeFillColor() {
        return this.colors['primary']
    },
    get activeTextColor() {
        return this.textColor
    },
    borderWidth: '2px',
    color: '#FFF',
    fontSize: '.9rem',
    fontWeight: 400,
    get inactiveTextColor() {
        return this.auxTextColor
    },
    paddingX: '1rem',
    paddingY: '1rem',
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
    }
})

export default tabs;