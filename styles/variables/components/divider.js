import colors from '../colors';
import globals from '../globals';

const divider = {
    ...globals,
    colors,
    
    get color() {
        return this.colors.aux
    }
}

export default divider;