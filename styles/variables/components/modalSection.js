import colors from '../colors';
import globals from '../globals';

const modalSection = theme => ({
    ...globals,
    colors,

    paddingX: '1.25rem',
    paddingY: '1.25rem',
    get padding() {
        return `${this.paddingY} ${this.paddingX}`
    },
})

export default modalSection;