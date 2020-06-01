import colors from '../colors';
import globals from '../globals';

const badge = {
    ...globals,
    colors,

    get color() {
        return '#FFF'
    },
    fontSize: '.75em'
}

export default badge;