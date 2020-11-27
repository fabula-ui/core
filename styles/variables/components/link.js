const link = theme => ({
    get color() { return theme.variables.colors.primary },
    get fontSize() { return theme.variables.globals.fontSize }
})

export default link;