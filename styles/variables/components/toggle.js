const toggle = theme => ({
    get color() {
        return theme.variables.colors.primary
    },
    fontWeight: 400,
    size: '1.5em'
})

export default toggle;