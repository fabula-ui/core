import validateColor from 'validate-color';

const getColor = (color, colors, fallbackColor) => {
    const paletteColor = colors[color];

    if (!color) {
        return null;
    } else if (!paletteColor && !validateColor(color)) {
        return fallbackColor || '';
    } else if (!paletteColor) {
        return color;
    } else {
        return paletteColor;
    }
}

export default getColor;