const tooltip = theme => ({
    get color() {
        return theme.variables.colors.dark
    },
    get fontSize() {
        return `calc(${theme.variables.globals.fontSize} * .85)`
    },
    offset: '.75em'
})

export default tooltip;