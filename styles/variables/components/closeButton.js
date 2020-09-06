import colors from '../colors';
import globals from '../globals';

const navbar = theme => ({
    ...globals,
    colors,

    get color() {
        return this.colors['white']
    },
    get hoverColor() {
        return this.colors['aux']
    }
})

export default navbar;