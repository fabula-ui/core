const overflowUtils = props => {
    const overflow = props.of || props.overflow;

    if (overflow) {
        return `
            > [data-fab-component] {
                overflow: ${overflow};
            }
        `
    } else {
        return ''
    }
}

export default overflowUtils;