const button = theme => ({    
    borderRadius: '.5em',
    borderRadiusSmashed: '.33em',
    borderWidth: 1,
    childrenSpacing: '.5em',
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
    minHeight: '3em',
    minHeightSmashed: '2em',
    paddingBottom: '.7em',
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
    paddingTop: '.7em',
    wideMultiplier: 4
})

export default button;