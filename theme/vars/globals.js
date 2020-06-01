const Color = require('color');

const globals = {
    backgroundColor: 'red',
    borderRadius: '.5rem',
    borderRadiusDefault: .5,
    borderRadiusRounded: '5em',
    disabledOpacity: .5,
    focusGlowRadius: '3px',
    fontFamily: '\'Inter\', sans-serif',
    fontSize: '1rem',
    sizeMultipliers: {
        xs: .75,
        sm: .9,
        md: 1,
        lg: 1.1,
        xl: 1.25,
        xxl: 1.5
    },
    sizeMultiplier__xs: .75,
    sizeMultiplier__sm: .9,
    sizeMultiplier__lg: 1.1,
    sizeMultiplier__xl: 1.25,
    sizeMultiplier__xxl: 1.5,
    sizeMultiplierLg: 1.1,
    sizeMultiplierSm: .9,
    sizeMultiplierXl: 1.25,
    sizeMultiplierXs: .75,
    // Text-related
    auxTextColor: '#999DA1',
    textColor: '#3D3D3D',
    get placeholderColor() {
        return Color(this.textColor).mix(Color('white'), .6)
    }
};

export default globals;