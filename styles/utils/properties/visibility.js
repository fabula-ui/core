const visibilityUtils = params => {
    const {props} = params;

    return `
        ${props.hidden ? 'visibility: hidden!important;' : ''}
        ${props.visible ? 'visibility: visible!important;' : ''}
    `
}

export default visibilityUtils