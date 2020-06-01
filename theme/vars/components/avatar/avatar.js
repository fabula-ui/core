import colors from '../../colors';
import globals from '../../globals';

const avatar = {
    ...globals,
    colors,

    get bgColor() {
        return colors['aux']
    },
    borderRadius: globals.borderRadius,
    borderRadiusRounded: '50%',
    defaultColor: colors.aux,
    fontFamily: globals.fontFamily,
    fontSize: '1rem',
    size: '3rem'
}

export default avatar;