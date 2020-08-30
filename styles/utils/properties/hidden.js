const hiddenUtils = params => {
    const {framework, props} = params;

    return `
        ${props.hidden ? 'display: none!important;' : ''}
    `
}

export default hiddenUtils