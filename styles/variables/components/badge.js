const badge = theme => ({
    borderRadius: '.33em',
    circleSize: '1.75em',
    get color() {
        return theme.variables.globals.baseColor
    },
    fontSize: '.75em',
    fontWeight: 600,
    glowX: 0,
    glowY: '1px',
    glowRadius: '1px',
    glowSpread: '1px',
    paddingBottom: '.4em',
    paddingLeft: '.6em',
    paddingRight: '.6em',
    paddingTop: '.4em',
})

export default badge;