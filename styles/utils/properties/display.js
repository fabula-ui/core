const displayUtils = props => {
    return `
            & {
                ${(props.display || props.d) ? `display: ${(props.display || props.d)}!important;` : ''}
                ${props.block ? 'display: block!important;' : ''}
            }
        `
}

export default displayUtils