import colors from '../colors';
import globals from '../globals';

const input = {
    ...globals,
    colors,
    color: '#FFF',
    get focusGlowColor() {
        return this.colors['primary']
    },
    fontSize: '1em',
    minHeight: '3rem',
    padding: '1em',
    spacing: '.5rem'
}

export default input;