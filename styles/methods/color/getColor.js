const getColor = (color, colors) => {
    const paletteColor = colors[color];

    if (!color) {
        return null;
    } else if (!paletteColor) {
        return color;
    } else {
        return paletteColor;
    }
}

export default getColor;