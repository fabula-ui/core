const overflowUtils = props => {
    const overflow = props.ov || props.overflow;
    const overflowX = props.ovX || props.overflowX;
    const overflowY = props.ovY || props.overflowY;

    return `
            > [data-fab-component] {
                ${overflow ? `overflow: ${overflow};` : ''}
                ${overflowX ? `overflow-x: ${overflowX};` : ''}
                ${overflowY ? `overflow-y: ${overflowY};` : ''}
            }

            ${overflow ? `overflow: ${overflow};` : ''}
            ${overflowX ? `overflow-x: ${overflowX};` : ''}
            ${overflowY ? `overflow-y: ${overflowY};` : ''}
        `
}

export default overflowUtils;