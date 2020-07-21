import colors from '../colors';
import globals from '../globals';

const modalSection = {
    ...globals,
    colors,

    get subtitleColor() {
        return this.auxTextColor
    },
    get titleColor() {
        return '#FFF'
    },
    titleFontSize: '1.25rem',
    titleFontWeight: 600
}

export default modalSection;