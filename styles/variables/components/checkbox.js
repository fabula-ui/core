import colors from '../colors';
import globals from '../globals';

const checkbox = {
    ...globals,
    colors,

    borderRadius: '.2em',
    get color() {
        return this.colors['aux']
    },
    fontSize: '1em',
    disabledOpacity: .4,
    size: '1.1em'
}

export default checkbox;