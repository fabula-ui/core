const navbar = theme => ({
    get color() {
        return theme.variables.colors.white
    },
    get hoverColor() {
        return theme.variables.colors.aux
    }
})

export default navbar;