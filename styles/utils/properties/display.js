const displayUtils = props => {
    if (props.display) {
        return `
            & {
                display: ${props.display}!important;
            }
        `
    } else {
        return ''
    }
}

export default displayUtils