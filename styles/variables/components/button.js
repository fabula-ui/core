const button = theme => ({    
    borderRadius: '.5em',
    borderRadiusSmashed: '.33em',
    borderWidth: 1,
    childrenSpacing: '.5em',
    color: '#FFF',
    compactMultiplier: .6,
    disabledOpacity: .6,
    get focusGlowColor() {
        return theme.variables.colors.primary
    },
    focusGlowRadius: '3px',
    fontWeight: 600,
    glowX: 0,
    glowY: '3px',
    glowRadius: '1px',
    glowSpread: '-1px',
    minHeight: '3em',
    minHeightSmashed: '2em',
    paddingX: '1.5em',
    paddingY: '.7em',
    get paddingBottom() {
        return this.paddingY
    },
    get paddingLeft() {
        return this.paddingX
    },
    get paddingRight() {
        return this.paddingX
    },
    get paddingTop() {
        return this.paddingY
    },
    wideMultiplier: 4
})

export default button;