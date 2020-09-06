import colors from '../colors';
import globals from '../globals';

const cardImage = theme => ({
    ...globals,
    colors,
    
    paddingX: '1rem',
    paddingY: '1rem',
    get padding() {
        return `${this.paddingY} ${this.paddingX}`
    },
})

export default cardImage;