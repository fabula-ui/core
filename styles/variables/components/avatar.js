import colors from '../colors';
import globals from '../globals';

const avatar = {
    ...globals,
    colors,

    get color() {
        return this.colors['aux']
    },
    get borderRadius() {
        return `calc(${globals.borderRadius} * .5)`
    },
    iconSize: '1.25em',
    initialsFontFamily: globals.fontFamily,
    initialsFontSize: '1em',
    initialsFontWeight: 500,
    initialsOpacity: .8,
    letterSpacing: '-1px',
    size: '3rem'
}

export default avatar;