const alert = () => ({
    borderRadius: '.5rem',
    color: '#FFF',
    glowRadius: '2px',
    glowSpread: 0,
    glowX: 0,
    glowY: '2px',
    markerWidth: '4px',
    paddingX: '1em',
    paddingY: '1em',
    get padding() {
        return `${this.paddingY} ${this.paddingX}`
    },
    spacingX: '.75em',
    spacingY: '.25em',
    textFontSize: '1em',
    textFontWeight: 400,
    titleFontSize: '.9em',
    titleFontWeight: 600,
})

export default alert;