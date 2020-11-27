const toast = theme => ({
    borderWidth: '1px',
    color: '#FFF',
    get fontSize() {
        return `calc(${theme.variables.globals.fontSize} * .95)`
    },
    fontWeight: 600,
    glowX: 0,
    glowY: '2px',
    glowRadius: '2px',
    glowSpread: 0,
    iconOffset: '.75em',
    paddingX: '1em',
    paddingY: '1em',
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
    spacing: '.5rem'
})

export default toast;