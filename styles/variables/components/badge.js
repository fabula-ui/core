import colors from '../colors';
import globals from '../globals';

const badge = {
    ...globals,
    colors,

    borderRadius: '.33em',
    circleSize: '1.75em',
    get color() {
        return '#FFF'
    },
    fontSize: '.75em',
    fontWeight: 600,
    paddingX: '.4em',
    paddingY: '.4em',
    get padding() {
        return `${this.paddingY} ${this.paddingX}`
    },
}

export default badge;