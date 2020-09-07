const alert = () => ({
    borderRadius: '.5rem',
    color: '#FFF',
    glowRadius: '2px',
    glowSpread: 0,
    glowX: 0,
    glowY: '2px',
    markerWidth: '4px',
    paddingX: '1rem',
    paddingY: '1rem',
    get padding() {
        return `${this.paddingY} ${this.paddingX}`
    },
    spacingX: '.75em',
    spacingY: '.25em',
    textFontSize: '1rem',
    textFontWeight: 400,
    textLineHeight: 1,
    titleFontSize: '.9rem',
    titleFontWeight: 600,
    titleLineHeight: 1,
})

export default alert;