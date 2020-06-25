import colors from '../colors';
import globals from '../globals';

const toggle = {
    ...globals,
    colors,

    get color() {
        return this.colors.primary
    },
    fontSize: '1em',
    size: '1.5em'
}

export default toggle;