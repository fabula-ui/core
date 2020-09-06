import colors from '../colors';
import globals from '../globals';

const tab = theme => ({
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
    get inactiveTextColor() {
        return this.auxTextColor
    },
    fontSize: '.9rem',
    fontWeight: 400,
    paddingX: '1rem',
    paddingY: '1rem'
})

export default tab;