const hiddenUtils = params => {
    const { props } = params;

    return `
        ${props.hidden ? 'display: none!important;' : ''}
    `
}

export default hiddenUtils