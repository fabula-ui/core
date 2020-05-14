import hoverColor from './hoverColor';

const focusGlowColor = (color, context) => {
    const fadeIntensity = {
        clear: .7,
        faded: .7,
        fill: .5,
        gradient: .5,
        invert: .7,
        outline: .7
    };
    const passContext = context === 'gradient' ? 'gradient_glow' : context;
    const $hoverColor = hoverColor(color, passContext);

    return $hoverColor.darken(.25).fade(fadeIntensity[context]);
}

export default focusGlowColor;