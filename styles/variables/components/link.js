import colors from '../colors';
import globals from '../globals';

const link = {
    ...globals,
    colors,

    get color() { return colors['primary'] },
    fontSize: '1em'
}

export default link;