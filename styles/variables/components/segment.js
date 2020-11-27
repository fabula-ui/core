const segment = theme => ({
    get activeFillColor() {
        return '#FFF'
    },
    get activeTextColor() {
        return theme.variables.colors['primary']
    },
    fontSize: '1em',
    get inactiveFillColor() {
        return theme.variables.colors['light']
    },
    get inactiveTextColor() {
        return theme.variables.globals.auxTextColor
    },
    get inactiveTextColor__hover() {
        return theme.variables.globals.textColor
    },
    fontSize: '.9rem',
    fontWeight: 500,
    paddingX: '1.5rem',
    paddingY: '.75rem'
})

export default segment;