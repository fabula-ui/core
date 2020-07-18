import colors from '../../colors';
import globals from '../../globals';

const avatar = {
    ...globals,
    colors,

    get color() {
        return this.colors['aux']
    },
    borderRadius: globals.borderRadius,
    defaultColor: colors.aux,
    fontFamily: globals.fontFamily,
    fontSize: '1rem',
    iconSize: '1.25rem',
    initialsFontSize: '1rem',
    initialsFontWeight: 500,
    initialsOpacity: .8,
    size: '3rem'
}

export default avatar;