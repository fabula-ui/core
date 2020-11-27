const dropdownHeader = theme => ({    
    fontSize: '.8em',
    fontWeight: 600,
    opacity: .8,
    paddingX: '1em',
    paddingY: '.25em',
    get textColor() {
        return theme.variables.globals.auxTextColor
    }
})

export default dropdownHeader;