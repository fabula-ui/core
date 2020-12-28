const button = theme => ({
    activeOpacity: .6,  
    borderRadius: '.5em',
    borderRadiusSmashed: '.33em',
    borderWidth: 1,
    get color() {
        return theme.variables.globals.baseColor
    },
    compactMultiplier: .6,
    disabledOpacity: .6,
    get focusGlowColor() {
        return theme.variables.colors.primary
    },
    focusGlowRadius: '3px',
    fontWeight: 600,
    glowX: 0,
    glowY: '1px',
    glowRadius: '1px',
    glowSpread: 0,
    height: '3rem',
    heightSmashed: '2rem',
    hoverOpacity: .8,
    paddingBottom: '.7em',
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
    paddingTop: '.7em',
    wideMultiplier: 4
})

export default button;