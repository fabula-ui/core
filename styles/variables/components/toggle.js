const toggle = theme => ({
    get color() {
        return theme.variables.colors.primary
    },
    fontWeight: 400,
    get size() {
        return `calc(${theme.variables.globals.fontSize} * 1.5)`
    }
})

export default toggle;