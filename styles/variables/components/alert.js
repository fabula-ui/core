const alert = theme => ({
    borderRadius: '.5rem',
    get color() {
        return theme.variables.globals.baseColor
    },
    glowRadius: '2px',
    glowSpread: 0,
    glowX: 0,
    glowY: '2px',
    markerWidth: '4px',
    paddingBottom: '1em',
    paddingLeft: '1em',
    paddingRight: '1em',
    paddingTop: '1em',
    spacingX: '.75em',
    spacingY: '.25em',
    textFontSize: '1em',
    textFontWeight: 400,
    titleFontSize: '.9em',
    titleFontWeight: 600,
})

export default alert;