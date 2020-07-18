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
    defaultColor: colors.aux,
    fontFamily: globals.fontFamily,
    fontSize: '1rem',
    fontWeight: 400,
    iconSize: '1.25rem',
    initialsFontSize: '1rem',
    initialsFontWeight: 500,
    initialsOpacity: .8,
    letterSpacing: '-1px',
    size: '3rem'
}

export default avatar;