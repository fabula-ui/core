const segments = theme => ({
    get activeFillColor() {
        return '#FFF'
    },
    get activeTextColor() {
        return theme.variables.colors['primary']
    },
    get borderColor() {
        return theme.variables.colors['light']
    },
    get fontSize() {
        return `calc(${theme.variables.globals.fontSize} * .9)`
    },
    fontWeight: 400,
    get inactiveFillColor() {
        return theme.variables.colors['light']
    },
    get inactiveTextColor() {
        return theme.variables.globals.auxTextColor
    },
    paddingX: '1.5em',
    paddingY: '.75em',
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
})

export default segments;