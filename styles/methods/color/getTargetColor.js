const getTargetColor = (color, colors) => {
    const paletteColor = colors[color];

    if (!color) {
        return {
            type: 'undefined',
            value: null
        };
    } else if (!paletteColor) {
        return {
            type: 'custom',
            value: color
        };
    } else {
        return {
            type: 'palette',
            value: paletteColor
        };
    }
}

export default getTargetColor;