const avatar = theme => ({
    get color() {
        return theme.variables.colors.aux
    },
    get borderRadius() {
        return `calc(${theme.variables.globals.borderRadius} * .5)`
    },
    iconSize: '1.25em',
    get initialsFontFamily() {
        return theme.variables.globals.fontFamily
    },
    initialsFontSize: '1em',
    initialsFontWeight: 500,
    initialsOpacity: .8,
    letterSpacing: '-1px',
    size: '3rem'
})

export default avatar;