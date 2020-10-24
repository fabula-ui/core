const tabs = theme => ({
    get activeBorderColor() {
        return theme.variables.colors['primary']
    },
    get activeFillColor() {
        return theme.variables.colors['primary']
    },
    get activeTextColor() {
        return theme.variables.globals.textColor
    },
    borderWidth: '2px',
    color: '#FFF',
    fontSize: '.9rem',
    fontWeight: 400,
    get inactiveTextColor() {
        return theme.variables.globals.auxTextColor
    },
    paddingX: '1rem',
    paddingY: '1rem',
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

export default tabs;