import colors from '../colors';
import globals from '../globals';

const tabs = {
    ...globals,
    colors,

    // Component vars
    get activeBorderColor() {
        return this.colors['primary']
    },
    get inactiveTextColor() {
        return this.auxTextColor
    },
    fontSize: '.9rem',
    paddingX: '1rem',
    paddingY: '1rem'
}

export default tabs;