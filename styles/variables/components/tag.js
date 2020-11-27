const tag = theme => ({
    borderRadius: `calc(${theme.variables.globals.borderRadius} * .6)`,
    borderWidth: '1px',
    get color() {
        return theme.variables.colors.aux
    },
    get fontSize() {
        return `calc(${theme.variables.globals.fontSize} * .9)`
    },
    fontWeight: 400,
    glowRadius: '2px',
    glowSpread: 0,
    glowX: 0,
    glowY: '1px',
    paddingX: '.7em',
    paddingY: '.3em',
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
    }
})

export default tag;