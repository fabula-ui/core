import colors from '../colors';
import globals from '../globals';

const cardSection = theme => ({
    ...globals,
    colors,
    
    paddingX: '1rem',
    paddingY: '1rem',
    get padding() {
        return `${this.paddingY} ${this.paddingX}`
    },
})

export default cardSection;