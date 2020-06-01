import colors from '../../colors';
import globals from '../../globals';

const button = {
    ...globals,
    colors,
    borderRadius: '.5em',
    borderRadiusDefault: .5,
    borderRadiusRounded: globals.borderRadiusRounded,
    borderWidth: 1,
    color: '#FFF',
    compactMultiplier: .6,
    get focusGlowColor() {
        return colors['primary']
    },
    focusGlowRadius: 3,
    fontFamily: globals.fontFamily,
    fontSize: globals.fontSize,
    fontWeight: 600,
    minHeight: '3rem',
    paddingBottom: '.7em',
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
    paddingTop: '.7em',
    sizeMultiplierLg: globals.sizeMultiplierLg,
    sizeMultiplierSm: globals.sizeMultiplierSm,
    sizeMultiplierXl: globals.sizeMultiplierXl,
    sizeMultiplierXs: globals.sizeMultiplierXs,
    wideMultiplier: 4

}

export default button;