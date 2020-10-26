const listHeader = theme => ({    
    fontSize: '.8rem',
    fontWeight: 600,
    opacity: .8,
    paddingX: '1rem',
    paddingY: '.25rem',
    get textColor() {
        return theme.variables.globals.auxTextColor
    }
})

export default listHeader;