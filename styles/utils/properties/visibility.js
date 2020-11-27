const visibilityUtils = params => {
    const { props } = params;
    const hasProperty = props.hasProperty || {};

    return `
    & {
        ${((props.hidden || props.visible === false) && !hasProperty.hidden) ? 'display: none!important;' : ''}
        ${(props.inline && props.visible && !hasProperty.visible) ? 'display: inline-block!important;' : ''}
        ${(!props.inline && props.visible && !hasProperty.visible) ? 'display: block!important;' : ''}
    }
    `
}

export default visibilityUtils