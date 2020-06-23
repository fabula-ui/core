import colors from '../colors';
import globals from '../globals';

const tab = {
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
    get inactiveTextColor() {
        return this.auxTextColor
    },
    fontSize: '.9rem',
    paddingX: '1rem',
    paddingY: '1rem'
}

export default tab;