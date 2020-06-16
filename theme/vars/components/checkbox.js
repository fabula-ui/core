import colors from '../colors';
import globals from '../globals';

const checkbox = {
    ...globals,
    colors,

    get color() {
        return this.colors['aux']
    },
    fontSize: '1em',
    size: '1.1em'
}

export default checkbox;