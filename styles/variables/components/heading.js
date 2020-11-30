const heading = theme => ({ 
    get color() {
        return theme.variables.globals.textColor
    },
    fontWeight: 700,
    letterSpacing: '-.05em',
    levelMultipliers: {
        '1': 3,
        '2': 2.5,
        '3': 2,
        '4': 1.5,
        '5': 1.25,
        '6': 1.1
    },
    marginBottom: '1em',
    marginTop: '1.5em',
    sizeRelations: {
        xxl: 1,
        xl: 2,
        lg: 3,
        md: 4,
        sm: 5,
        xs: 6
    }
})

export default heading;