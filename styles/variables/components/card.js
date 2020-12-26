const card = theme => ({
    borderRadius: '.75rem',
    get color() {
        return theme.variables.globals.baseColor
    },
    glowX: 0,
    glowY: '2px',
    glowRadius: '2px',
    glowSpread: 0,
    paddingX: '1rem',
    paddingY: '1rem',
    get padding() {
        return `${this.paddingY} ${this.paddingX}`
    },
})

export default card;