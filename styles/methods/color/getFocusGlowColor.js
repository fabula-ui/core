import getHoverColor from './getHoverColor';

const getFocusGlowColor = (color, context) => {
    const fadeIntensity = {
        clear: .7,
        faded: .7,
        fill: .5,
        gradient: .5,
        invert: .7,
        outline: .7
    };
    const passContext = context === 'gradient' ? 'gradient_glow' : context;
    const $hoverColor = getHoverColor(color, passContext);

    if (context === 'clear') {
        return 'transparent';
    } else {
        return $hoverColor.darken(.25).fade(fadeIntensity[context]);
    }
    
}

export default getFocusGlowColor;