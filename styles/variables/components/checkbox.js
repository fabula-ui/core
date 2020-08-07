import colors from '../colors';
import globals from '../globals';

const checkbox = {
    ...globals,
    colors,

    get activeColor() {
        return this.colors.primary
    },
    borderRadius: '.2em',
    get color() {
        return this.colors.aux
    },
    disabledOpacity: .6,
    get inactiveColor() {
        return this.colors.aux
    },
    size: '1.1em',
    spacing: '.5em'
}

export default checkbox;