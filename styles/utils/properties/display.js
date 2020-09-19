const displayUtils = props => {
    if (props.display || props.d) {
        return `
            & {
                display: ${(props.display || props.d)}!important;
            }
        `
    } else {
        return ''
    }
}

export default displayUtils