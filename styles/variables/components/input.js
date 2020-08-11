import colors from '../colors';
import globals from '../globals';

const input = {
    ...globals,
    colors,
    
    color: '#FFF',
    get focusGlowColor() {
        return this.colors.primary
    },
    focusGlowRadius:'3px',
    fontSize: '1em',
    minHeight: '3rem',
    paddingX: '1em',
    paddingY: '1em',
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
    spacing: '.5rem'
}

export default input;