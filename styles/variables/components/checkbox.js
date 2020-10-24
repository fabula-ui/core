const checkbox = theme => ({
    get activeColor() {
        return theme.variables.colors.primary
    },
    borderRadius: '.2em',
    get color() {
        return theme.variables.colors.aux
    },
    disabledOpacity: .6,
    get inactiveColor() {
        return theme.variables.colors.aux
    },
    size: '1.1em',
    spacing: '.5em'
})

export default checkbox;