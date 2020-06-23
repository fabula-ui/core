import Color from 'color';

import colors from './colors';

const globals = {
    colors,

    get borderColor() {
        return this.colors['aux']
    },
    borderRadius: '.5rem',
    borderRadiusDefault: .5,
    borderRadiusRounded: '5em',
    borderWidth: '1px',
    disabledOpacity: .5,
    focusGlowRadius: '3px',
    fontFamily: '\'Inter\', sans-serif',
    fontSize: '1rem',
    sizeMultipliers: {
        xxs: .6,
        xs: .75,
        sm: .9,
        md: 1,
        lg: 1.1,
        xl: 1.25,
        xxl: 1.5
    },
    
    // Text-related
    auxTextColor: '#999DA1',
    textColor: '#3D3D3D',
    get placeholderColor() {
        return Color(this.textColor).mix(Color('white'), .6)
    },
    get placeholderImageColor() {
        return Color(this.colors['light']).darken(.05)
    },
};

export default globals;