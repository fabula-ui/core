const hiddenUtils = params => {
    const {framework, props} = params;
    const wrapper = framework === 'angular' ? '' : '&';

    return `
        ${props.hidden ? 'display: none!important;' : ''}
    `
}

export default hiddenUtils