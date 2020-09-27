const visibilityUtils = params => {
    const {props} = params;
    const hasProperty = props.hasProperty || {};

    return `
        ${(props.hidden && !hasProperty.hidden) ? 'display: none!important;' : ''}
        ${(props.visible && !hasProperty.visible) ? 'display: block!important;' : ''}
    `
}

export default visibilityUtils