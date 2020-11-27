const tab = theme => ({
    get activeBorderColor() {
        return theme.variables.colors.primary
    },
    get activeFillColor() {
        return theme.variables.colors.primary
    },
    get activeTextColor() {
        return theme.variables.globals.textColor
    },
    borderWidth: '2px',
    color: '#FFF',
    get inactiveTextColor() {
        return theme.variables.globals.auxTextColor
    },
    fontSize: '1em',
    fontWeight: 400,
    paddingX: '1rem',
    paddingY: '1rem'
})

export default tab;