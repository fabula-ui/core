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
    get fontSize() {
        return `calc(${theme.variables.globals.fontSize} * .9)`
    },
    fontWeight: 400,
    get inactiveTextColor() {
        return theme.variables.globals.auxTextColor
    },
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
    }
})

export default tabs;