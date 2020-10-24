const toggle = theme => ({
    get color() {
        return theme.variables.colors.primary
    },
    size: '1.5em'
})

export default toggle;