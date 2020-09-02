const visibilityUtils = params => {
    const {props} = params;

    return `
        ${props.hidden ? 'display: none!important;' : ''}
        ${props.visible ? 'display: block!important;' : ''}
    `
}

export default visibilityUtils