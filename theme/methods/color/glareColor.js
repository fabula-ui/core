const glareColor = (theme, bgColor) => {
    const $bgColor = Color(bgColor).rgb();

    if ($bgColor.luminosity() > baseLuminosity) {
        return theme.globals.glareColor.light;
    } else {
        return theme.globals.glareColor.dark;
    }
}

export default glareColor;