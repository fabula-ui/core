import colors from '../colors';
import globals from '../globals';

const toggle = theme => ({
    ...globals,
    colors,

    get color() {
        return this.colors.primary
    },
    size: '1.5em'
})

export default toggle;