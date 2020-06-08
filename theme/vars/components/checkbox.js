import colors from '../colors';
import globals from '../globals';

const checkbox = {
    ...globals,
    colors,

    get color() {
        return this.colors['aux']
    }
}

export default checkbox;